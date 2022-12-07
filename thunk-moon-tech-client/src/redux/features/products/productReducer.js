import { ADD_TO_CART, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, REMOVE_FROM_CART, WISHLIST } from "./actiontypes";
import { productInitialState } from "./productInitialState";





const productReducer = (state = productInitialState, action) => {

   const selectedProduct = state.cart.find(product => product._id === action.payload._id);

    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            };
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                products: [],
                error: true
            };
            case ADD_TO_CART:
                if(selectedProduct){
                    const newCart = state.cart.filter(product => product._id !== selectedProduct._id);

                    selectedProduct.quantity += 1;
                    

                    return {
                        ...state,
                        cart: [...newCart, selectedProduct]
                    };
                }
                  return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity : 1}],
                  };
            case REMOVE_FROM_CART:
                if(selectedProduct.quantity> 1){
                    const newCart = state.cart.filter(product => product._id !== selectedProduct._id);

                    selectedProduct.quantity -= 1;

                    return {
                        ...state,
                        cart: [...newCart, selectedProduct]
                    };
                }
                return{
                    ...state,
                    cart: state.cart.filter(product => product._id !== action.payload._id)
                };
            case WISHLIST:
                return{
                    ...state,
                    wishlist: [...state.wishlist, action.payload]
                };
        

    
        default:
            return state;
    }

}
export default productReducer;