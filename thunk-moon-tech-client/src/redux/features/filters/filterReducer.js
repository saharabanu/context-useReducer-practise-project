import { CLEAR_FILTER, TOGGLE_BRAND, TOGGLE_STOCK } from "./filterActionTypes";
import { filterInitialState } from "./filterInitialState";


const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {

        // toggle brand reducer function 
        case TOGGLE_BRAND:
            // if brands not added in this array, then this condition push new brand
            if(!state.filters.brands.includes(action.payload)){
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        brands:[...state.filters.brands, action.payload]
                    }
    
                };
            }
            else{

                 // if brands  added in this array, then this condition pop brand from this array
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        brands: state.filters.brands.filter(brand => brand !== action.payload)
                    }
    
                };  
            }

            // toggle stock reducer function 

        case TOGGLE_STOCK:
            return{
                ...state,
                filters:{
                    ...state.filters,
                    stock: !state.filters.stock
                }

            };
            // clear filter reducer function 

        case CLEAR_FILTER:
            return{
                ...state,
                filters:{
                    brands:[],
                    stock:false,
                },
                all_products: state.all_products,
                keyword: ""
                
                

            };
            
          
    
        default:
            return state;
    }
}

export default filterReducer;