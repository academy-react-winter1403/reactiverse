import React from 'react'
import './footerResponsive.css'

const Footer = () => {
  return (
    <div className='Footer flex justify-center relative w-full mb-5'>
      <div className='join dark rounded-3xl bg-gray-700 p-3 text-right w-3/7'>
        <div className='text-2xl font-bold dark mb-6.5'>به ما بپیوندید</div>
        <p className='dark'>در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه ای وردپرس آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند</p>
        <button className='mt-2.5 px-4.5 py-1 text-white bg-blue-500'>ارسال رزومه</button>
      </div>
      <div className='Links flex justify-center  bg-transparent dark w-4/7'>
        <div className='text-right w-44'>
          <div className='font-bold text-2xl text-gray-500'>لینک های مرتبط</div>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
        </div>
        <div className='text-right w-44'>
          <div className='font-bold text-2xl text-gray-500'>لینک های مرتبط</div>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
        </div>
        <div className='text-right w-44'>
          <div className='font-bold text-2xl text-gray-500'>لینک های مرتبط</div>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
          <a href='*'>لینک های مرتبط</a>
        </div>
      </div>
    </div>
  )
}

export default Footer