// product action 

import { ADD_PRODUCT, ADD_TO_CART, EDIT_PRODUCT, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, REMOVE_FROM_CART, REMOVE_PRODUCT, WISHLIST } from "./actiontypes";


// product fetching  start action function 
export const productFetchingStart = () => {
    return{
        type: FETCHING_START
    }
};
// product fetching  success action function 
export const productFetchingSuccess = (data) => {
    return{
        type: FETCHING_SUCCESS,
        payload: data
    }
};
// product add  action function 
export const addProduct = (data) => {
    return{
        type: ADD_PRODUCT,
        payload: data
    }
};
// product Edit  action function 
export const editProduct = (id,data) => {
    return{
        type: EDIT_PRODUCT,
        payload:{
            id,
            data
        }
    }
};
// product remove  action function 
export const removeProduct = (id) => {
    return{
        type: REMOVE_PRODUCT,
        payload: id
    }
};

// product fetching  error action function 
export const productFetchingError = (error) => {
    return{
        type: FETCHING_ERROR,
        payload: error
    }
};
// product ADd to cart action function 
export const addToCart = (product) => {
    return{
        type: ADD_TO_CART,
        payload: product
    };
};


export const removeFromCart = (product) => {
    return{
        type: REMOVE_FROM_CART,
        payload: product,
    }
};

export const wishlistFunc = (product) => {
    return{
        type: WISHLIST,
        payload: product,
    }
};

