import { ADD_TO_CART, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, REMOVE_FROM_CART, WISHLIST } from "./actiontypes";

export const initialState = {
    loading: false,
    products:[],
    error: false,
    cart: [],
    wishlist: []
}

const productReducer = (state, action) => {

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
                return{
                    ...state,
                    cart: [...state.cart, action.payload]
                };
            case REMOVE_FROM_CART:
                return{
                    ...state,
                    cart: [...state.cart.filter(product => product._id !== action.payload)]
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