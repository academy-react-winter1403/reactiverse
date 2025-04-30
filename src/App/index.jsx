import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from '../config/router/routs'
import { useEffect } from 'react'
import LandingHolder from '../components/LandingHolder/index.jsx'

function App() {

  // useEffect(() => {
  //   document.body.classList.add("bg-white")
  // }, [])
  

  return (
    <>
      <RouterProvider router={Routes}/>
      {/* <LandingHolder/> */}
    </>
  )
}

export default App
