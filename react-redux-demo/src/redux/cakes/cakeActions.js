import { BUY_CAKE, ADD_CAKE } from "./cakeTypes"

export const buyCake = (countOfCakes) => {
    return {
        type: BUY_CAKE,
        payload: countOfCakes
    }
}

export const addCake = (countOfCakes) => {
    return {
        type: ADD_CAKE,
        payload: countOfCakes
    }
}