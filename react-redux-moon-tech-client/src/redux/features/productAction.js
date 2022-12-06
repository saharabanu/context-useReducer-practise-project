// product action 

import { ADD_TO_CART, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, REMOVE_FROM_CART, WISHLIST } from "./actiontypes";





// product fetching  start action function 
export const productFetchingStart = () => {
    return{
        type: FETCHING_START
    }
};
// product fetching  success action function 
export const productFetchingSuccess = (products) => {
    return{
        type: FETCHING_SUCCESS,
        payload: products
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

