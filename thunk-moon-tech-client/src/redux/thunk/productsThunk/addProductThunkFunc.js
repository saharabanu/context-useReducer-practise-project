import { addProduct } from "../../features/products/productAction";

export const addProductThunkFunc = (product) => {
    return async(dispatch) => {
        const response = await fetch("http://localhost:9000/product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await  response.json();

        if(data.acknowledged){
            dispatch(addProduct({
                _id: data.insertedId,
                ...product
            }))
        }

    }
}