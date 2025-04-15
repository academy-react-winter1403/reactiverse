import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import  authRoutes from '../config/router/auth.router.jsx'
import Panel from '../screens/Panel'
import { RouterProvider } from 'react-router-dom'

function App() {
  
  return (
    <>
     <RouterProvider router={authRoutes}/>
    </>
  )
}

export default App
