import { FETCH_REQUEST_PRODUCTS, FETCH_SUCCESS_PRODUCTS } from "../actions/products"

const initialState = {
    list: [],
    isLoading: false
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST_PRODUCTS:
            return {...state, isLoading: true}
        case FETCH_SUCCESS_PRODUCTS:
            return {...state, isLoading: false, list: action.payload}
        default:
            return state
    }
}