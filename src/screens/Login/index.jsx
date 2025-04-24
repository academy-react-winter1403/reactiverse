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

export default login