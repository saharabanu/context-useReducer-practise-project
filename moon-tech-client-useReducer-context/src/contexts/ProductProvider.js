import React, { createContext, useEffect, useReducer, useState } from 'react';
import { actionType, initialState } from '../states/productActionTypes';
import { reducer } from '../states/productReducer';
export const product_Context = createContext();

const ProductProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    useEffect(()=> {
        dispatch({type: actionType.FETCHING_LOADING});
      fetch("https://lit-coast-44901.herokuapp.com/spots")
      .then(res=> res.json())
      .then(data => dispatch({type: actionType.FETCHING_SUCCESS, payload: data}))
      .catch(() => {
        dispatch({type: actionType.FETCHING_ERROR})
      })
    },[]);
  
    const value ={
         state, dispatch
    }
  return <product_Context.Provider value={value}>{children}</product_Context.Provider>
}

export default ProductProvider