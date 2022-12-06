import {applyMiddleware, createStore }from 'redux'
import productReducer from './features/productReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(productReducer, composeWithDevTools(applyMiddleware()))