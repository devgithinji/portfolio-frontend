import {
    ADD_IMAGE,
    DELETE_IMAGE,
    DELETE_PROJECT, GET_POSTS,
    GET_PROJECTS,
    LOAD_CATEGORIES,
    LOGIN,
    LOGIN_BEGIN,
    LOGIN_ERROR,
    LOGOUT_USER, SET_EDIT_PROJECT,
    SET_FORM_ERROR, SET_NOT_FOUND, SET_POST, START_FORM_LOAD,
    START_PAGE_LOAD, STOP_FORM_LOAD,
    STOP_PAGE_LOAD
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