import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from '../config/router/routs'

function App() {

  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
