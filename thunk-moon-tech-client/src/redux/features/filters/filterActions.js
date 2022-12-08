import { CLEAR_FILTER, TOGGLE_BRAND, TOGGLE_STOCK } from "./filterActionTypes"



//  brand toggled action 
export const toggledBrand = (brand) => {
    return{
        type: TOGGLE_BRAND,
        payload: brand
    }
};


//  stock toggled action 
export const toggledStock = () => {
    return{
        type: TOGGLE_STOCK,
        
    }
};
//  stock toggled action 
export const clearFilter = () => {
    return{
        type: CLEAR_FILTER,
        
    }
};