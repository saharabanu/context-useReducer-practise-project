import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";



const Cart = () => {
    
   // distructuing from state 
   const { loading, error} = useSelector(state => state);
   const cart = useSelector(state => state.products.cart);
 
   let content;
 
   if (loading) {
     content = <p>Loading.......</p>
     
   }
   if (error) {
     content = <p className="bg-red-500 text-white">Something went wrong.......</p>
     
   }
   if (!loading && !error && cart?.length === 0) {
     content = <p> There is no Product added in cart.......</p>
     
   }
   if (!loading && !error && cart?.length) {
     content = cart.sort((a ,b) => a._id - b._id).map(product => <ProductCard key = {product._id} product={product}/>)
     
   }
   
  
   
   return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
       {content}

    
     </div>
   );
};

export default Cart;
