import React ,{useEffect} from "react";
import ProductCard from "../../components/ProductCard";
import {useDispatch, useSelector} from 'react-redux'
import { toggledBrand, toggledStock } from "../../redux/features/filters/filterActions";
import { fetchProducts } from "../../redux/thunk/productsThunk/fetchProducts";


const Home = () => {
  // distructuing from state 
  const {products, loading, error} = useSelector(state => state.products);
  const {brands, stock} = useSelector(state => state.filters.filters)
  const dispatch = useDispatch();

  
 
  useEffect( () => {
    dispatch(fetchProducts())
  }, [dispatch]);
  


  const activeClass = "text-white  bg-indigo-500 border-white";


   

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
   if (!loading && !error && products?.length ) {
     content = products?.map(product => <ProductCard key = {product?._id} product={product}/>)
     
   }
   if (!loading && !error && products?.length && (stock || brands.length)) {
     content = products
     .filter((product) => {
      if(stock){
        return product.status === true;
      }
      return product;

     })
     .filter((product) =>{
      if(brands.length){
        return brands.includes(product.brand);
      }
      return product;
     })
     .map(product => <ProductCard key = {product._id} product={product}/>)
     
   }
   
  
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button onClick={() => dispatch(toggledStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock &&activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') && activeClass}`} onClick={() => dispatch(toggledBrand("amd"))}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') && activeClass}`} onClick={() => dispatch(toggledBrand("intel"))}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {content}
       
      </div>
    </div>
  );
};

export default Home;
