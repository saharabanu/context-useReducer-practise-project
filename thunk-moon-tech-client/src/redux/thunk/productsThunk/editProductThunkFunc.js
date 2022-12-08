import { editProduct } from "../../features/products/productAction";

export const editProductThunkFunc = (id, product) => {
    console.log(product);

    return async(dispatch) => {
        const response = await fetch(`http://localhost:9000/product/${id}`,{
            method: "PUT",
            body: JSON.stringify({
                model: product.model,
                image: product.image,
               status: product.status,
              keyFeature: product.keyFeature,
              price: product.price,
              rating: product.rating,
              spec: product.spec,
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data)

        if(data.acknowledged){
            dispatch(editProduct({
                _id: data.insertedId,
                ...product
            }))
        }
        

    }

}