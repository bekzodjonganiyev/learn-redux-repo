import { USER_REQUEST, USER_SUCCESS, USER_FAILED, USER_ADD } from "./userTypes";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_REQUEST:
            return {...state, loading: true}
        case USER_SUCCESS:
            return {data: action.payload, loading: false, error: ""}
        case USER_FAILED:
            return {data: [], loading: false, error: action.payload}
        case USER_ADD:
            return {data: [action.payload, ...state.data], loading: false, error: ""}
        default:
            return state
    }
}

export default userReducer