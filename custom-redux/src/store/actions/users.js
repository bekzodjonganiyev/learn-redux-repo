export const FETCH_REQUEST_USERS = "FETCH_REQUEST_USERS"
export const FETCH_SUCCESS_USERS = "FETCH_SUCCESS_USERS"

export const requestUsers = () => ({type: FETCH_REQUEST_USERS})
export const successUsers = (payload) => ({type: FETCH_SUCCESS_USERS, payload: payload})