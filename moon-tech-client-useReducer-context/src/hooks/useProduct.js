import  { useContext } from 'react'
import { product_Context } from '../contexts/ProductProvider'

const useProduct = () => {
  const context = useContext(product_Context);
  return context;
}

export default useProduct