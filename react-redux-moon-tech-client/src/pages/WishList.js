import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';


const WishList = () => {
  
  // distructuing from state 
  const {wishlist, loading, error} = useSelector(state => state);

  let content;

  if (loading) {
    content = <p>Loading.......</p>
    
  }
  if (error) {
    content = <p className="bg-red-500 text-white">Something went wrong.......</p>
    
  }
  if (!loading && !error && wishlist?.length === 0) {
    content = <p> There is no Product.......</p>
    
  }
  if (!loading && !error && wishlist?.length) {
    content = wishlist.map(product => <ProductCard key = {product._id} product={product}/>)
    
  }
  
 
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
       {content} 
    </div>
  );
}

export default WishList