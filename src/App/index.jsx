<<<<<<< HEAD
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from '../config/router/routs'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.body.classList.add("bg-white")
  }, [])
  

  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
=======
import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from '../screens/Login'
import { authRoutes } from '../config/router/roots'
import { commonRoutes } from '../config/router/common.router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
     <RouterProvider router={commonRoutes} />
    </>
  )
}

export default App
>>>>>>> blogDetail
