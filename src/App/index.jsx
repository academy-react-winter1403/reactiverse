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
