
import React from 'react'
import Botton from './Button'
import MenuItems from './MenuItems'

import Logo from '../../../assets/img/logo'
import { DarkMode } from '../darkmode'
import './headerResponsive.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const Profile = () => {
    navigate("/registerStepOne")
  } 


  return (
    <div className='Header relative flex justify-between flex-row-reverse items-center w-full mt-5 mb-15 rounded-2xl px-4 bg-gray-200 light'>
      <div className='Menu flex justify-center gap-5 h-full font-bold items-center'>
        <Link to={`/`} className='cursor-pointer'>خانه</Link>     
        <Link to={`/Courses`} className='cursor-pointer'>دوره ها</Link>     
        <Link to={`/Teacher`} className='cursor-pointer'>اساتید</Link>             
        <Link to={`/blog`} className='cursor-pointer'>اخبار</Link>      
        <Link to={`*`} className='cursor-pointer'>ارطبات با ما</Link>    
        <Logo/>              
      </div>
      <div className=' flex h-full gap-1.5 items-center justify-center'>
        <img onClick={Profile} className='cursor-pointer bg-transparent w-9 h-9' src='../../../../public/1.png'/>
        <img id='image' onClick={DarkMode} className='cursor-pointer bg-transparent w-9 h-9' src='../../../../public/2.png'/>
      </div>
    </div>
  )
}

export default Header