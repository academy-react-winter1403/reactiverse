import React from 'react'
// import Register from '../../components/LoginForm/register'
// import Login from '../../components/LoginForm/login'
import { authRoutes } from '../../config/router/roots.jsx'
import { RouterProvider } from 'react-router-dom'
import { getApi } from '../../core/services/api/index.js'

const login = () => {


  return (
    <div>
        {/* <Register />
        <Login /> */}
        <RouterProvider router={authRoutes} />
    </div>
  )
}

export default login