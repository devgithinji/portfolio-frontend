import {
    ADD_CATEGORY,
    ADD_IMAGE, ADD_SCHOOL, CLEAR_POST, DELETE_CATEGORY,
    DELETE_IMAGE, DELETE_JOB, DELETE_POST,
    DELETE_PROJECT, DELETE_SCHOOL, GET_JOB, GET_JOBS, GET_POSTS,
    GET_PROJECTS, GET_SCHOOLS,
    LOAD_CATEGORIES,
    LOGIN,
    LOGIN_BEGIN,
    LOGIN_ERROR,
    LOGOUT_USER, SET_EDIT_PROJECT,
    SET_FORM_ERROR, SET_NOT_FOUND, SET_POST, SET_SCHOOL, START_FORM_LOAD,
    START_PAGE_LOAD, STOP_FORM_LOAD,
    STOP_PAGE_LOAD, UPDATE_CATEGORY,
} from "./actions";

const reducer = (state, action) => {

    if (action.type === LOGIN_BEGIN) {
        return {
            ...state, isLoading: true
        }
    }

    if (action.type === LOGIN) {
        const {user, token} = action.payload
        return {
            ...state,
            isLoading: false,
            user: user,
            token: token
        }
    }

    if (action.type === LOGIN_ERROR) {
        return {
            ...state, isLoading: false
        }
    }

    if (action.type === LOGOUT_USER) {
        return {...state, user: null, token: null}
    }

    if (action.type === LOAD_CATEGORIES) {
        return {...state, categories: action.payload}
    }

    if (action.type === ADD_CATEGORY) {
        const categories = state.categories;
        const newCategories = [...categories, action.payload]
        return {...state, categories: newCategories}
    }

    if (action.type === UPDATE_CATEGORY) {
        const data = action.payload;
        const categories = state.categories;
        const newCategories = categories.map(cat => {
            if (cat.id === data.id) {
                return data;
            }
            return cat;
        });
        return {...state, categories: newCategories}
    }
    if (action.type === DELETE_CATEGORY) {
        const categories = state.categories;
        const newCategories = categories.filter(cat => cat.id !== action.payload);
        return {...state, categories: newCategories}
    }

    if (action.type === GET_PROJECTS) {
        return {...state, projects: action.payload}
    }

    if (action.type === SET_EDIT_PROJECT) {
        return {...state, project: action.payload};
    }

    if (action.type === DELETE_PROJECT) {
        const projects = state.projects.filter(project => project.id !== action.payload)
        return {...state, projects}
    }

    if (action.type === GET_POSTS) {
        const {posts} = action.payload
        return {...state, posts: posts}
    }

    if (action.type === SET_POST) {
        return {...state, post: action.payload}
    }
    if (action.type === DELETE_POST) {
        const posts = state.posts.filter(post => post.id !== action.payload)
        return {...state, posts}
    }

    if (action.type === CLEAR_POST) {
        return {...state, post: {}}
    }

    if (action.type === ADD_IMAGE) {
        const image = action.payload;
        const post = state.post;
        const images = state.post.images;
        const newImages = [...images, image]

        return {...state, post: {...post, images: newImages}}
    }

    if (action.type === DELETE_IMAGE) {
        const imageId = action.payload;
        const post = state.post;
        const images = state.post.images.filter(img => img.id !== imageId);

        return {...state, post: {...post, images}}
    }

    if (action.type === GET_SCHOOLS) {
        return {...state, schools: action.payload}
    }

    if (action.type === ADD_SCHOOL) {
        const schools = state.schools;
        const newSchools = [...schools, action.payload]
        return {...state, schools: newSchools}
    }

    if (action.type === SET_SCHOOL) {
        return {...state, school: action.payload}
    }

    if (action.type === DELETE_SCHOOL) {
        const schools = state.schools.filter(school => school.id !== action.payload);
        return {...state, schools}
    }

    if (action.type === GET_JOBS) {
        return {...state, jobs: action.payload}
    }

    if (action.type === GET_JOB) {
        return {...state, job: action.payload}
    }

    if (action.type === DELETE_JOB) {
        const jobs = state.jobs.filter(job => job.id !== action.payload);
        return {...state, jobs}
    }

    if (action.type === SET_FORM_ERROR) {
        return {...state, errors: action.payload}
    }

    if (action.type === SET_NOT_FOUND) {
        return {...state, notFoundError: action.payload}
    }

    if (action.type === START_PAGE_LOAD) {
        return {
            ...state, isPageLoading: true
        }
    }

    if (action.type === STOP_PAGE_LOAD) {
        return {
            ...state, isPageLoading: false
        }
    }

    if (action.type === START_FORM_LOAD) {
        return {
            ...state, isFormLoading: true
        }
    }

    if (action.type === STOP_FORM_LOAD) {
        return {
            ...state, isFormLoading: false
        }
    }

}

export default reducer;