import { FETCH_SUCCESS_USERS, FETCH_REQUEST_USERS } from "../actions/users"

const initialState = {
    list: [],
    isLoading: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_REQUEST_USERS:
            return {...state, isLoading: true}
        case FETCH_SUCCESS_USERS:
            return {...state, isLoading: false, list: action.payload}
        default:
            return state
    }
}