
import React from 'react'
import './footerResponsive.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer flex justify-center relative w-full mb-5 mt-[200px] gap-[100px]'>

      <div className='Links flex gap-[60px] justify-center bg-transparent light w-4/7'>
        <div className='text-right w-44'>
          <div className='font-bold text-2xl text-gray-500'>لینک های مرتبط</div>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
        </div>
        <div className='text-right w-44'>
          <div className='font-bold text-2xl text-gray-500'>لینک های مرتبط</div>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
        </div>
        <div className='text-right w-44'>
          <div className='font-bold text-2xl text-gray-500'>لینک های مرتبط</div>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
          <Link to={'*'}>لینک های مرتبط</Link>
        </div>
      </div>
      <div className='join light rounded-3xl bg-gray-200 p-[30px] w-[400px] text-right w-3/7'>
        <div className='text-2xl font-bold light mb-6.5'>به ما بپیوندید</div>
        <p className='light'>در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه ای وردپرس آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند</p>
        <button className='mt-2.5 px-4.5 py-1 text-white w-[100px] bg-[#25546f]'>ارسال رزومه</button>
      </div>
    </div>
  )
}

export default Footer