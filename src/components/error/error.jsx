<<<<<<< HEAD
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

=======
import React from 'react'
import './error.css'


const Error = () => {
  return (
    <div className='errorPage'>
        <div>404</div>
        <img className='' src='./errorIcon.png'/>
        <h1>NOT FOUND</h1>
        <p>sorry but we couldn't find the page that you were looking for</p>
    </div>
  )
}

>>>>>>> blogDetail
export default Error