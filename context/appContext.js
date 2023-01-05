//set default state
import {createContext, useContext, useEffect, useReducer} from "react";
import reducer from "./reducer";
import axios from "axios";
import {
    GET_PROJECTS,
    LOAD_CATEGORIES,
    LOGIN,
    LOGIN_BEGIN,
    LOGIN_ERROR,
    LOGOUT_USER, SET_EDIT_PROJECT,
    SET_FORM_ERROR, SET_NOT_FOUND, START_FORM_LOAD, START_PAGE_LOAD, STOP_FORM_LOAD, STOP_PAGE_LOAD,
} from "./actions";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

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
    categories: [],
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
        console.log(error)
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


    const getCategories = async () => {
        const {data} = await authFetch.get('/category');
        dispatch({type: LOAD_CATEGORIES, payload: data})
    }
    //update project
    const updateProject = async (projectDetails, projectId) => {
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
        const {data} = await authFetch.get('/projects');
        dispatch({type: GET_PROJECTS, payload: data})
    }

    //add projects
    const addProject = async (projectDetails) => {
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
                getCategories,
                setFormError,
                getProjects,
                getProject,
                updateProject
            }}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider}