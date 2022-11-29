import React from "react";
import ProductCard from "../components/ProductCard";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const {state} = useProduct();
  const {products, loading, error }= state
  // console.log(products);

  let content ;
  if(loading) {
    content = <p>Loading..........</p>
    
  }
  if(error) {
    content = <p> Something went wrong</p>

  }
  if(!error && !loading && products.length === 0) {
    content = <p>Product empty</p>

  }
  if(!error && !loading && products.length ) {
    content = products?.map(product => <ProductCard key={product._id} product={product}/>)

  }

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;
