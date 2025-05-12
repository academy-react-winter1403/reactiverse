import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'

const Roots = () => {
return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
)
}

export default Roots