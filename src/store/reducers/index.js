import { productReducer } from "./products";
import { userReducer } from "./users";

const reducers = {
    users: userReducer,
    products: productReducer
}

export default reducers