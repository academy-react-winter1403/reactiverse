import React from 'react'
import './searchResponsive.css'
import { Field, Form, Formik } from 'formik';

const SearchBar = ({handleFlag,setQuery}) => {

    const Search = (value) => {
      setQuery(value.search)
      
      handleFlag()
    }


  
  return (
    <Formik 
    initialValues={{search:""}}
    onSubmit={Search}>
      <Form>
        <div className='Search light bg-gray-200 h-20 mb-5 mt-5 rounded-[50px] flex overflow-hidden border-[1px] border-[#ccc] '>
          <button type='submit' className=' w-52 cursor-pointer text-gray-500 hover:bg-gray-400 hover:border-none items-center text-xl/[3.5] font-bold'> جستوجوی دوره </button>
          <div className='border-l-slate-500 hide cursor-pointer w-45 mt-[3px] text-start px-2 text-xl/[3.5] font-bold bg-[length:45%_100%] bg-no-repeat bg-right'> مرتب سازی:</div>

          <div className='relative w-150 '><Field className='text-right bg-gray-200 text-slate-800 border-none text-gray-900 h-full w-full outline-0 px-2.5 font-bold text-xl' placeholder='جدید ترین            قدیمی ترین' name="search"/></div>
        </div>
      </Form>
    </Formik>
  )
}

export default SearchBar
