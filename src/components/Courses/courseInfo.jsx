import React from 'react'

const CourseInfo = ({TeacherName,Cost,Title,Description,Status,Technology,Level}) => {
  return (
  // <div className='CourseInfo light w-3xs rounded-[50px] min-h-[700px] overflow-hidden mt-7 bg-gray-200 relative'>
  <div className='CourseInfo light grid grid-cols-3 gap-6  w-[250px] h-[500px]'>

    <div className=' w-[230px] z-10 relative right-[9px]'><img  src='./6.png'/></div>
    <div className='bg-white w-[250px] h-[330px]  mt-[100px] rounded-3xl relative left-[90px] pt-[60px] z-0 text-right'>
      <h2 className='p-2 font-bold text-xl'>{Title}</h2>
      <p className='p-2 line-clamp-1'>{Description}</p>
      <p className=' p-1 font-bold line-clamp-1'>وضعیت: {Status}</p>
      <p className='p-1 font-bold line-clamp-1'>{Technology} :Technology</p>  
      <p className=' p-1 font-bold line-clamp-1'>دسته بندی: {Level}</p>  
      <div className='text-start p-2 mb-15'>{TeacherName}</div>
      <div className='p-3 mt-5 flex w-full border-t-2 relative bottom-6'>
          <div className='w-[80px] h-[22px] rounded-xl bg-slate-400 text-center text-white ml-[50px] text-[14px]'>10:56:31</div>
          <div className='text-xl font-bold relative right-3 text-[15px] text-gray-800 truncate'>ت{Cost}</div>
          
      </div>
    </div>
  </div>
  )
}

export default CourseInfo