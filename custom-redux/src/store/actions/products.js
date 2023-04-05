export const FETCH_REQUEST_PRODUCTS = "FETCH_REQUEST_PRODUCTS"
export const FETCH_SUCCESS_PRODUCTS = "FETCH_SUCCESS_PRODUCTS"

export const requestProducts = () => ({type: FETCH_REQUEST_PRODUCTS})
export const successProducts = (payload) => ({type: FETCH_SUCCESS_PRODUCTS, payload: payload})