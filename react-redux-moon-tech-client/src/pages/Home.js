import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";



const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);
  // distructuing from state 
  const { loading, error} = useSelector(state => state);

  let content;

  if (loading) {
    content = <p>Loading.......</p>
    
  }
  if (error) {
    content = <p className="bg-red-500 text-white">Something went wrong.......</p>
    
  }
  if (!loading && !error && products?.length === 0) {
    content = <p> There is no Product.......</p>
    
  }
  if (!loading && !error && products?.length) {
    content = products.map(product => <ProductCard key = {product._id} product={product}/>)
    
  }
  
 
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content} 
      
    </div>
  );
};

export default Home;
