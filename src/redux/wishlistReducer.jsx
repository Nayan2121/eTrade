import { WISHLIST_ADD, WISHLIST_REMOVE } from "./constant";

export const wishData = (data = [], action) => {

    switch (action.type) {

        case WISHLIST_ADD:
            return [action.data, ...data];

        case WISHLIST_REMOVE:
            const removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem];

        default:
            return data;
    }
}