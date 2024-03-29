import { combineReducers } from 'redux'
import { cartData } from './reducer'
import { productData } from './ProductReducer'
import { wishData } from './wishlistReducer'

export default combineReducers({
    cartData,
    productData,
    wishData
})
