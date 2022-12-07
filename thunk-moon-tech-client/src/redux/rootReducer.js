import {combineReducers} from 'redux'
import filterReducer from './features/filters/filterReducer'
import productReducer from './features/products/productReducer'

export const rootReducer = combineReducers({
    products: productReducer,
    filters: filterReducer

})