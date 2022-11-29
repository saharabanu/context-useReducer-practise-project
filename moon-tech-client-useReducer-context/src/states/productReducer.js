import { actionType } from "./productActionTypes";

export const reducer = (state, action) => {
    switch (action.type) {
        case actionType.FETCHING_LOADING:
            return{
                ...state,
                loading: true,
                error: false
            }
        case actionType.FETCHING_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload,
                error: false
            }
        case actionType.FETCHING_ERROR:
            return{
                ...state,
                loading: false,
                products:[],
                error: true
            }
    
        default:
            return state
    }
}