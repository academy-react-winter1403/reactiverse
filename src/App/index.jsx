import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from '../screens/Login'

function App() {
  const [count, setcount] = useState(0)

  return (
    <>
     {/* routers are here */}
     <Login/>
     {/* <RouterProvider router={authRoutes} /> */}
    </>
  )
}

export default App
