import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editProductThunkFunc } from '../../redux/thunk/productsThunk/editProductThunkFunc';

const EditProductForm = ({setEditMode,  data}) => {
 const  { model, brand, price,keyFeature, status, _id } = data;
    console.log(data);
    
    // console.log(products.model);
    
    const [modell, setModell] = useState("");
    const [upbrand, setUpbrand] = useState("");
    const [upkeyFeature, setUpkeyFeature] = useState("");
    const [upPrice, setUpPrice] = useState("");
    const [upstatus, setUpstatus] = useState(false);
    const [upSpec, setUpSpec] = useState("");
   
  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(editProductThunkFunc(_id,{
          ...data,
        model: modell,
        brand: upbrand,
        keyFeature:upkeyFeature,
        status: upstatus === "true" ? true : false,
        price: upPrice,
        spec: upSpec,
        
      }))

    
      setEditMode(false)
  };
  



  
  return (
    <>
         <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-3/5 my-6 mx-auto max-w-2xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t w-full">
            <h3 className="text-xl font-semibold">Edit Todo Text</h3>
            <button className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setEditMode(false)}>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/*body*/}

          <div className='flex flex-col w-full max-w-xs '>
          <label className='mb-2' htmlFor='model'>
            Model
          </label>
          <input type='text' id='model'defaultValue={model} name="model" onChange={(e) => setModell(e.target.value)}  className=" py-3 border" placeholder='edit model'/>
        </div>
          {/* <div className="relative p-6 flex-auto">
            <input type="text" name="model"className="border block w-full p-2"/> 
            
          </div> */}

          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button className="text-red-500 background-transparent font-bold uppercase px-3 py-2 text-sm outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" type="button" 
            onClick={() => setEditMode(false)} >
            {/* onClick={() => setEditMode(false)} */}
              Close
            </button>
            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" 
            onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default EditProductForm