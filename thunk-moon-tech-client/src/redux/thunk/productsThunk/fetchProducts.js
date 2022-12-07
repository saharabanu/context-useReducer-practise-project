import { productFetchingSuccess } from "../../features/products/productAction";

export const fetchProducts = () => {
    return async (dispatch) => {
     const response = await fetch('http://localhost:9000/products');
     const data = await response.json();
     if(data.data.length){
        dispatch(productFetchingSuccess(data.data))
     }

    }
}