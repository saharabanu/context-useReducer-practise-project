import { removeProduct } from "../../features/products/productAction";

export const removeProductThunkFunc = (id) => {
    return async(dispatch) => {
        const response = await fetch(`http://localhost:9000/product/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        if(data.acknowledged){
            dispatch(removeProduct(id))
        }


    }
}