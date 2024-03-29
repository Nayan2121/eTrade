import { ADD_TO_CART, DECREMENT_QUANTITY, EMPTY_CART, INCREMENT_QUANTITY, REMOVE_FROM_CART, WISHLIST_ADD, WISHLIST_REMOVE } from "./constant";

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {    
    return {
        type: EMPTY_CART,
    }
}

export const incrementQuantity = (data) => {    
    return {
        type: INCREMENT_QUANTITY,
        data
    }
}

export const decrementQuantity = (data) => {    
    return {
        type: DECREMENT_QUANTITY,
        data
    }
}

export const wishlistAdd = (data) => {    
    return {
        type: WISHLIST_ADD,
        data
    }
}

export const wishlistRemove = (data) => {    
    return {
        type: WISHLIST_REMOVE,
        data
    }
}
