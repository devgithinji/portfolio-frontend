import {createContext, useContext, useReducer} from "react";
import reducer from "./reducer";
import axios from "axios";
import {
    ADD_CATEGORY,
    ADD_IMAGE, ADD_JOB, ADD_SCHOOL,
    CLEAR_POST, DELETE_CATEGORY,
    DELETE_IMAGE, DELETE_JOB,
    DELETE_POST,
    DELETE_PROJECT, DELETE_SCHOOL, GET_JOB, GET_JOBS,
    GET_POSTS,
    GET_PROJECTS, GET_SCHOOLS,
    LOAD_CATEGORIES,
    LOGIN,
    LOGIN_BEGIN,
    LOGIN_ERROR,
    LOGOUT_USER,
    SET_EDIT_PROJECT,
    SET_FORM_ERROR,
    SET_NOT_FOUND,
    SET_POST, SET_PROFILE, SET_SCHOOL,
    START_FORM_LOAD,
    START_PAGE_LOAD,
    STOP_FORM_LOAD,
    STOP_PAGE_LOAD, UPDATE_CATEGORY, UPDATE_JOB, UPDATE_SCHOOL
} from "./actions";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

//set default state

let user = null;
let token = null;

if (typeof window !== "undefined") {
    user = localStorage.getItem('user')
    token = localStorage.getItem('token')
}

const initialState = {
    isFormLoading: false,
    isPageLoading: false,
    user: user ? JSON.parse(user) : null,
    token: token,
    projects: [],
    project: null,
    posts: [],
    post: null,
    categories: [],
    schools: [],
    school: null,
    jobs: [],
    profile: null,
    job: null,
    errors: {},
    notFoundError: false
}

//create context
const AppContext = createContext();

const AppProvider = ({children}) => {
    const router = useRouter();
    const [state, dispatch] = useReducer(reducer, initialState);
    //axios instance
    const authFetch = axios.create({
        baseURL: 'http://localhost:8082'
    })

    //request
    authFetch.interceptors.request.use((config) => {
        config.headers['Authorization'] = `${state.token}`
        return config;
    }, (error) => {
        return Promise.reject(error)
    })

    //response
    authFetch.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.code === 'ERR_NETWORK') {
            toast.error('something went wrong')
            return Promise.reject(error);
        }
        const status = error.response.status;
        if (status === 401) {
            logoutUser();
        }

        if (status === 500) {
            toast.error('something went wrong')
        }

        if (status !== 422 && status !== 500) {
            toast.error(error.response.data.error)
        }

        return Promise.reject(error);
    })

    //get profile
    const getProfile = async () => {
        try {
            const {data} = await authFetch.get('/profile')
            dispatch({type: SET_PROFILE, payload: data})
        } catch (e) {

        }
    }
    //update profile
    const updateProfile = async (profileData) => {
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.put('/profile', profileData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            dispatch({type: SET_PROFILE, payload: data})
            toast.success('profile updated!')
        } catch (e) {

        }
        dispatch({type: STOP_FORM_LOAD})
    }
    //get jobs
    const getJobs = async () => {
        try {
            const {data} = await authFetch.get('/job-history');
            dispatch({type: GET_JOBS, payload: data})
        } catch (e) {

        }
    }

    //get job
    const getJob = async (jobId) => {
        try {
            const {data} = await authFetch.get(`/job-history/${jobId}`);
            dispatch({type: GET_JOB, payload: data})
        } catch (e) {

        }
    }

    //add job
    const addJob = async (jobData) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.post(`/job-history`, jobData);
            router.push('/admin/work')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }

    //update job
    const updateJob = async (jobData, jobId) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.put(`/job-history/${jobId}`, jobData);
            router.push('/admin/work')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }

    //const delete job
    const deleteJob = async (jobId) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        try {
            const {data} = await authFetch.delete(`/job-history/${jobId}`);
            dispatch({type: DELETE_JOB, payload: jobId})
        } catch (e) {

        }
    }


    //add school
    const addSchool = async (schoolData) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.post('/education-history', schoolData);
            dispatch({type: ADD_SCHOOL, payload: data})
            toast.success('school added successfully')
            router.push('/admin/education')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }

    //update school
    const updateSchool = async (schoolData, schoolId) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.put(`/education-history/${schoolId}`, schoolData);
            toast.success('school updated successfully')
            router.push('/admin/education')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }

    //get school
    const getSchool = async (schoolId) => {
        dispatch({type: SET_NOT_FOUND, payload: false})
        dispatch({type: START_PAGE_LOAD})
        try {
            const {data} = await authFetch.get(`/education-history/${schoolId}`)
            dispatch({type: SET_SCHOOL, payload: data})
        } catch (e) {
            if (e.response.status === 404) {
                dispatch({type: SET_NOT_FOUND, payload: true})
            }
        }
        dispatch({type: STOP_PAGE_LOAD})
    }

    //get schools
    const getSchools = async () => {
        try {
            const {data} = await authFetch.get('/education-history');
            dispatch({type: GET_SCHOOLS, payload: data})
        } catch (e) {

        }
    }

    //delete school
    const deleteSchool = async (schoolId) => {
        try {
            const {data} = await authFetch.delete(`/education-history/${schoolId}`)
            toast.success(data)
            dispatch({type: DELETE_SCHOOL, payload: schoolId})
        } catch (e) {

        }
    }


    //get categories
    const getCategories = async () => {
        const {data} = await authFetch.get('/category');
        dispatch({type: LOAD_CATEGORIES, payload: data})
    }
    //add category
    const addCategory = async (catData) => {
        try {
            const {data} = await authFetch.post('/category', catData);
            dispatch({type: ADD_CATEGORY, payload: data})
            toast.success('category added')
            return data;
        } catch (e) {

        }
    }
    //update category
    const updateCategory = async (catData, catId) => {
        try {
            const {data} = await authFetch.put(`/category/${catId}`, catData)
            toast.success('category updated')
            dispatch({type: UPDATE_CATEGORY, payload: data})
            return data;
        } catch (e) {

        }
    }
    //delete category
    const deleteCategory = async (catId) => {
        try {
            const {data} = await authFetch.delete(`/category/${catId}`)
            toast.success(data)
            dispatch({type: DELETE_CATEGORY, payload: catId})
        } catch (e) {

        }
    }
    //delete image
    const deleteImage = async (imageId) => {
        try {
            const {data} = await authFetch.delete(`image/${imageId}`);
            toast.success(data)
            dispatch({type: DELETE_IMAGE, payload: imageId})
        } catch (e) {

        }
    }
    //upload post image
    const uploadImage = async (formData) => {
        try {
            const {data} = await authFetch.post(`/image`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            toast.success('image updated successfully')

            dispatch({type: ADD_IMAGE, payload: data})

            return data.path;
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                toast.error(error)
            }
        }
    }
    //get post
    const getPost = async (postId) => {
        dispatch({type: SET_NOT_FOUND, payload: false})
        dispatch({type: START_PAGE_LOAD})
        try {
            const {data} = await authFetch.get(`/posts/admin/${postId}`)
            dispatch({type: SET_POST, payload: data})
        } catch (e) {
            if (e.response.status === 404) {
                dispatch({type: SET_NOT_FOUND, payload: true})
            }
        }
        dispatch({type: STOP_PAGE_LOAD})
    }
    //get posts
    const getPosts = async () => {
        const {data} = await authFetch.get('/posts');
        dispatch({type: GET_POSTS, payload: data})
    }
    //delete post
    const deletePost = async (postId) => {
        try {
            const {data} = await authFetch.delete(`/posts/${postId}`);
            dispatch({type: DELETE_POST, payload: postId})
            toast.success(data);
        } catch (e) {
            toast.error(e.response.data.error);
        }
    }
    //update post
    const updatePost = async (postDetails, postId) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.put(`/posts/${postId}`, postDetails);
            toast.success('post updated successfully')
            await router.push('/admin/blog')
            dispatch({type: CLEAR_POST, payload: postId})
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }
    //add post
    const addPost = async (postDetails) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.post('/posts', postDetails);
            toast.success('post added successfully')
            router.push('/admin/blog')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }
    //delete project
    const deleteProject = async (projectId) => {
        try {
            const {data} = await authFetch.delete(`/projects/${projectId}`);
            dispatch({type: DELETE_PROJECT, payload: projectId})
            toast.success(data);
        } catch (e) {
            toast.error(e.response.data.error);
        }
    }
    //update project
    const updateProject = async (projectDetails, projectId) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.put(`/projects/${projectId}`, projectDetails, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            toast.success('project updated successfully')
            router.push('/admin/projects')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }
    //get project
    const getProject = async (projectId) => {
        dispatch({type: SET_NOT_FOUND, payload: false})
        dispatch({type: START_PAGE_LOAD})
        try {
            const {data} = await authFetch.get(`/projects/${projectId}`)
            dispatch({type: SET_EDIT_PROJECT, payload: data})
        } catch (e) {
            if (e.response.status === 404) {
                dispatch({type: SET_NOT_FOUND, payload: true})
            }
        }
        dispatch({type: STOP_PAGE_LOAD})
    }
    //get projects
    const getProjects = async () => {
        try {
            const {data} = await authFetch.get('/projects');
            dispatch({type: GET_PROJECTS, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
    //add projects
    const addProject = async (projectDetails) => {
        dispatch({type: SET_FORM_ERROR, payload: {}})
        dispatch({type: START_FORM_LOAD})
        try {
            const {data} = await authFetch.post('/projects', projectDetails, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            toast.success('project added successfully')
            router.push('/admin/projects')
        } catch (e) {
            if (e.response.status === 422) {
                const error = e.response.data.errors;
                dispatch({type: SET_FORM_ERROR, payload: error})
            }
        }
        dispatch({type: STOP_FORM_LOAD})
    }
    const loginUser = async (userDetails) => {
        dispatch({type: LOGIN_BEGIN})
        try {
            const {data} = await axios.post('http://localhost:8082/auth/login', userDetails);
            const {token, user} = data;
            dispatch({
                type: LOGIN,
                payload: {
                    user, token
                }
            })
            toast.success('login successfully')
            addUserToLocalStorage({user, token})
        } catch (e) {
            dispatch({type: LOGIN_ERROR})
            if (e.response.status !== 401) {
                logoutUser()
            }
            toast.error(e.response.data.error)

        }
    }
    const setFormError = (error) => {
        dispatch({type: SET_FORM_ERROR, payload: error})
    }
    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage();
    }
    const addUserToLocalStorage = ({user, token}) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token)
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                logoutUser,
                loginUser,
                addProject,
                addCategory,
                getCategories,
                deleteCategory,
                setFormError,
                getProjects,
                getProject,
                updateProject,
                deleteProject,
                addPost,
                updatePost,
                getPosts,
                getPost,
                uploadImage,
                deleteImage,
                updateCategory,
                deletePost,
                getSchools,
                addSchool,
                getSchool,
                updateSchool,
                deleteSchool,
                getJobs,
                getJob,
                updateJob,
                addJob,
                deleteJob,
                getProfile,
                updateProfile
            }}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider}