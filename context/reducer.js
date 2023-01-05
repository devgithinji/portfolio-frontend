import {
    GET_PROJECTS,
    LOAD_CATEGORIES,
    LOGIN,
    LOGIN_BEGIN,
    LOGIN_ERROR,
    LOGOUT_USER,
    SET_FORM_ERROR,
    START_LOAD,
    STOP_LOAD
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

    if (action.type === SET_FORM_ERROR) {
        return {...state, errors: action.payload}
    }

    if (action.type === START_LOAD) {
        return {
            ...state, isLoading: true
        }
    }

    if (action.type === STOP_LOAD) {
        return {
            ...state, isLoading: false
        }
    }

}

export default reducer;