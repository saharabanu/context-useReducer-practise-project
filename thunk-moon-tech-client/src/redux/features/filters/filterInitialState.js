import { productInitialState } from "../products/productInitialState";

export const filterInitialState = {
    all_products:productInitialState.products,
    filters: {
        brands:[],
        stock: false,
    },
    
    keyword: ""
}