import React from "react";


const TopRated = () => {
  // // state from useReducer 
  // const {state} = useProduct();
  // // distructuing from state 
  // const {products, loading, error} = state;

  // let content;

  // if (loading) {
  //   content = <p>Loading.......</p>
    
  // }
  // if (error) {
  //   content = <p className="bg-red-500 text-white">Something went wrong.......</p>
    
  // }
  // if (!loading && !error && products?.length === 0) {
  //   content = <p> There is no Product.......</p>
    
  // }
  // if (!loading && !error && products?.length) {
  //   content = products
  //   .filter(product => product.rating >= 4)
  //   .map(product => <ProductCard key = {product._id} product={product}/>)
    
  // }
  
 
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {/* {content} */} this is top rated
    </div>
  );
};

export default TopRated;
