import { BUY_ICECREAM, ADD_ICECREAM } from "./iceCreamTypes"

export const buyIceCream = (countOfIceCreams) => {
    return {
        type: BUY_ICECREAM,
        payload: countOfIceCreams
    }
}

export const addIceCream = (countOfIceCreams) => {
    return {
        type: ADD_ICECREAM,
        payload: countOfIceCreams
    }
}