import React, { createContext, useEffect, useReducer  } from 'react';

import { productFetchingError, productFetchingStart, productFetchingSuccess } from '../states/productAction';
import productReducer, { initialState } from '../states/productReducer';
export const productContext = createContext();

const ProductProvider = ({children}) => {
   
    const [state, dispatch] = useReducer(productReducer, initialState);
    console.log(state)

    useEffect( () => {
        dispatch(productFetchingStart)
        fetch('./products.json')
        .then(res => res.json())
        .then(data => dispatch(productFetchingSuccess(data)))
        .catch(err => dispatch(productFetchingError(err)))
    },[]);

    const value = {
        state,
        dispatch
    }
  return <productContext.Provider value={value}>{children}</productContext.Provider>
}

export default ProductProvider;