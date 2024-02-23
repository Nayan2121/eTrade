import { ADD_TO_CART, DECREMENT_QUANTITY, EMPTY_CART, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {

    switch (action.type) {
        
        case ADD_TO_CART:
            return [action.data, ...data]

        case REMOVE_FROM_CART:
            const remainingItem = data.filter((item) => item.id !== action.data);
            return [...remainingItem]

        case EMPTY_CART:
            data = []
            return [...data]

        case INCREMENT_QUANTITY:
            let incrmentItem = data.filter((item) => {
                if (item.id === action.data) {
                    let quantity = item.quantity += 1;
                    let price = item.rate += item.newprice;

                    return [price, quantity]
                }
                else {
                    return item;
                }
            })
            return [...incrmentItem];


        case DECREMENT_QUANTITY:
            let decrementItem = data.filter((item) => {
                if (item.id === action.data) {
                    if (item.quantity !== 1) {
                        let quantity = item.quantity -= 1;
                        let price = item.rate -= item.newprice;

                        return [price, quantity]
                    }
                    else {
                        return item;
                    }
                }
                else {
                    return item;
                }
            })
            return [...decrementItem];


        default:
            return data
    }
}
