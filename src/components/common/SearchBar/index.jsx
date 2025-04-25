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
        <div className='Search light bg-gray-200 h-20 mb-5 rounded-2xl flex justify-end overflow-hidden'>
          <div className='relative w-150'><Field className='text-right text-gray-900 h-full w-full outline-0 px-2.5 font-bold text-xl' placeholder='جدیدترین قدیمی ترین' name="search"/></div>
          <div className='hide cursor-pointer w-45 text-start px-2 text-xl/[3.5] font-bold bg-[url("./3.png")] bg-[length:45%_100%] bg-no-repeat bg-right'>مرتب سازی</div>
          <button type='submit' className='border-l-2 border-solid border-gray-600 w-52 cursor-pointer text-gray-500 hover:bg-gray-400 items-center text-xl/[3.5] font-bold'>جستوجو</button>
        </div>
      </Form>
    </Formik>
  )
}

export default SearchBar
