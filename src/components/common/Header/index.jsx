import React from 'react'
import Logo from '../../../assets/img/logo'
import { DarkMode } from '../darkmode'
import './headerResponsive.css'

const Header = () => {
  const Profile = () => {
    window.location.href = "/register"
  } 


  return (
    <div className='Header relative flex justify-between w-full h-12 mt-5 mb-15 rounded-2xl bg-gray-700 dark'>
      <div className=' flex h-full gap-1.5'>
        <img onClick={Profile} className='cursor-pointer bg-transparent' src='./1.png'/>
        <img id='image' onClick={DarkMode} className='cursor-pointer bg-transparent' src='./4.png'/>
      </div>
      <div className='Menu flex gap-5 h-full font-bold items-center'>
        <a href='*' className='cursor-pointer'>خانه</a>     
        <a href='/Courses' className='cursor-pointer'>دوره ها</a>     
        <a href='/comment/Teacher' className='cursor-pointer'>اساتید</a>             
        <a href='/blog' className='cursor-pointer'>اخبار</a>      
        <a href='*' className='cursor-pointer'>ارطبات با ما</a>    
        <Logo/>              
      </div>

    </div>
  )
}

export default Header