<<<<<<< HEAD
import React from 'react'
import Login from '../../components/LoginForm/login'
import LoginVerify from '../../components/LoginForm/verify/loginVerify'
import RegisterVerify from '../../components/LoginForm/verify/registerVerify'
import Register from '../../components/LoginForm/register'

const login = () => {


  return (
    <div>
        <Login/>
        <LoginVerify/>
        <RegisterVerify/>
        <Register/>
    </div>
  )
}

=======
import React from 'react'
// import Register from '../../components/LoginForm/register'
// import Login from '../../components/LoginForm/login'
import { authRoutes } from '../../config/router/roots.jsx'
import { RouterProvider } from 'react-router-dom'

const login = () => {
  return (
    <div>
        {/* <Register />
        <Login /> */}
        <RouterProvider router={authRoutes} />
    </div>
  )
}

>>>>>>> blogDetail
export default login