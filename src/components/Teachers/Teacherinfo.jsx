import React from 'react'

const TeacherInfo = ({TeacherName}) => {
  return (
    <div className='dark bg-gray-700 my-5 w-200 items-center m-auto rounded-2xl flex flex-row-reverse'>
    <img className='m-5 rounded-4xl w-90 h-70 overflow-hidden' src='./8.png'/>
    <div className='m-5 w-150'>
        <h2 className='text-4xl p-2 font-bold'>{TeacherName}</h2>
        <h2 className='text-2xl p-2 font-bold'>این یک متن توضیحات کوتاه درمورد استاد است</h2>
        <div className='border-b-1 flex gap-5 flex-wrap justify-center p-7'>
            <div className='bg-gray-500 rounded-xl p-1 w-43 flex justify-between gap-4'>
                <img className='w-6' src='./9.png'/>
                <div className='font-bold'>دکتری الافی</div>
            </div>
            <div className='bg-gray-500 rounded-xl flex gap-4 p-1 w-43'>
                <img className='w-6' src='./11.png'/>
                <div className='font-bold'>10:56:31</div>
                <div className='font-bold'>آموزش</div>
            </div>
            <div className='flex gap-4 justify-between bg-gray-500 rounded-xl p-1 w-43'>
                <img className='w-6' src='./10.png'/>
                <div className='font-bold'>5/5</div>
                <div className='font-bold'>امتیاز</div>
            </div>
            <div className='flex gap-4 justify-between bg-gray-500 rounded-xl p-1 w-43'>
                <img className='w-6' src='./9.png'/>
                <div className='font-bold'>دوره آموزشی 6</div>
            </div>
        </div>
        <p className='font-bold text-start my-4'>مشاهده جزئیات</p>
    </div>
</div>
  )
}

export default TeacherInfo