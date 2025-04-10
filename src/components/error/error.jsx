import React from 'react'


const Error = () => {
  return (
    <div className='errorPage text-black'>
        <div className=' font-medium text-7xl'>404</div>
        <img className='m-auto my-5' src='../../../public/errorIcon.png'/>
        <h1 className='mb-5'>NOT FOUND</h1>
        <p>sorry but we couldn't find the page that you were looking for</p>
    </div>
  )
}

export default Error