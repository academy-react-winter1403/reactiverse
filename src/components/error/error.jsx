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

export default Error