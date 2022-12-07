import {applyMiddleware, createStore }from 'redux';
import { rootReducer } from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import cartCounter from './middleware/cartCounter';
import thunk  from 'redux-thunk'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)))