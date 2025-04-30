import React from 'react'
import teacherImg from '../../assets/img/IMG_7350.png'

const TeacherInfo = ({TeacherName}) => {
  return (
    <div className='TeacherInfo light bg-white my-5 w-[750px] h-[420px] items-center m-auto rounded-[35px] flex flex-row-reverse relative right-[100px]'>
    {/* <img className='TeacherImg m-2 rounded-4xl w-90 h-70  border-[1px] border-[red]' src={teacherImg}/> */}
    <div className='m-5 w-150  z-50'>
        <h2 className='text-4xl p-2 text-slate-600 text-right'>{TeacherName}</h2>
        <h2 className='text-2xl p-2 text-slate-400 text-right'>این یک متن توضیحات کوتاه درمورد استاد است</h2>
        <div className=' w-[400px] gap-[5px] flex-wrap justify-center p-2 grid grid-cols-2 '>
            <div className='bg-[#b2b2b2] rounded-xl p-1 w-[190px] flex justify-between gap-4 text-white h-[30px]'>
                <img className='w-6 rounded-3xl' src='./9.png'/>
                <div className='font-bold'>دکتری الافی</div>
            </div>
            <div className='bg-[#b2b2b2] text-white rounded-xl flex gap-4 p-1 w-[190px] h-[30px]'>
                <img className='w-6' src='./11.png'/>
                <div className='font-bold'>10:56:31</div>
                <div className='font-bold'>آموزش</div>
            </div>
            <div className='flex gap-4 justify-between bg-[#b2b2b2] text-white rounded-xl p-1 w-[190px] h-[30px]'>
                <img className='w-6' src='./10.png'/>
                <div className='font-bold'>5/5</div>
                <div className='font-bold'>امتیاز</div>
            </div>
            <div className='flex gap-4 justify-between bg-[#b2b2b2] text-white rounded-xl p-1 w-[190px] h-[30px]'>
                <img className='w-6' src='./9.png'/>
                <div className='font-bold'>دوره آموزشی 6</div>
            </div>
        </div>
        <p className='font-bold text-[19px] text-start my-4 text-[#2b4563] text-left border-t-[1px] border-[#ccc] pt-[30px]'>مشاهده جزئیات -</p>
        
    </div>
    <img className='TeacherImg m-2 w-90 h-70 rounded-[35px] relative left-[10px]' src={teacherImg}/>
</div>
  )
}

export default TeacherInfo