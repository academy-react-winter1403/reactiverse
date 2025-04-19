import React from 'react'
import Logo from '../../../assets/img/logo'
import { DarkMode } from '../darkmode'
import './headerResponsive.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const Profile = () => {
    navigate("/registerStepOne")
  } 


  return (
    <div className='Header relative flex justify-between flex-row-reverse items-center w-full mt-5 mb-15 rounded-2xl bg-gray-700 dark'>
      <div className='Menu flex justify-center gap-5 h-full font-bold items-center'>
        <a href='/' className='cursor-pointer'>خانه</a>     
        <a href='/Courses' className='cursor-pointer'>دوره ها</a>     
        <a href='/Teacher' className='cursor-pointer'>اساتید</a>             
        <a href='/blog' className='cursor-pointer'>اخبار</a>      
        <a href='*' className='cursor-pointer'>ارطبات با ما</a>    
        <Logo/>              
      </div>
      <div className=' flex h-full gap-1.5 items-center justify-center'>
        <img onClick={Profile} className='cursor-pointer bg-transparent w-9 h-9' src='../../../../public/1.png'/>
        <img id='image' onClick={DarkMode} className='cursor-pointer bg-transparent w-9 h-9' src='../../../../public/4.png'/>
      </div>
    </div>
  )
}

export default Header