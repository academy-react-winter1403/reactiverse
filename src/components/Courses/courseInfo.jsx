import React from 'react'

const CourseInfo = ({TeacherName,Cost,Title,Description,Status,Technology,Level}) => {
  return (
  <div className='CourseInfo dark w-3xs rounded-[30px] min-h-130 overflow-hidden mt-7 bg-gray-700 relative'>
    <img className=' rounded-[30px]' src='./6.png'/>
    <h2 className='text-end p-2 font-bold text-xl'>{Title}</h2>
    <p className='text-end p-2'>{Description}</p>
    <p className='text-end p-1 font-bold'>وضعیت: {Status}</p>
    <p className='text-end p-1 font-bold'>{Technology} :Technology</p>  
    <p className='text-end p-1 font-bold'>دسته بندی: {Level}</p>  
    <div className='text-start p-2 mb-15'>{TeacherName}</div>
    <div className='p-3 mt-5 flex w-full border-t-2 absolute bottom-0 border-gray-400'>
        <div className='text-xl font-bold'>تومان{Cost}</div>
        <div className='bg-gray-500 absolute right-3 rounded-2xl px-1.5'>10:56:31</div>
    </div>
  </div>
  )
}

export default CourseInfo