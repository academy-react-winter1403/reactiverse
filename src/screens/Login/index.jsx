import React from 'react'
import Login from '../../components/LoginForm/login'
import LoginVerify from '../../components/LoginForm/verify/loginVerify'
import RegisterVerify from '../../components/LoginForm/verify/registerVerify'
import Register from '../../components/LoginForm/register'
// import Register from '../../components/LoginForm/register'
// import Login from '../../components/LoginForm/login'
// import { Routes } from '../../config/router/roots.jsx'
// import { RouterProvider } from 'react-router-dom'
// import { getApi } from '../../core/services/api/index.js'

const login = () => {


  return (
    <div>
        {/* <Register />
        <Login /> */}
        {/* <RouterProvider router={Routes} /> */}
        <Login/>
        <LoginVerify/>
        <RegisterVerify/>
        <Register/>
    </div>
  )
}

export default login