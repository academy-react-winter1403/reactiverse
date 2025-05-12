import React , {useState , useEffect} from 'react'
import { TeachInfoHandler } from './TeachInfoHandler'
import { GetTeachersInfo } from '../../core/services/api/teacher'
import './teacherResponsive.css'
import path from '../../assets/img/Path 17.png'
import pathh from '../../assets/img/Path 15.png'

const Teacher = () => {

    const [Teacher, setTeacher] = useState([])

  const  getTeacher = async() =>{
      const course = await GetTeachersInfo(); 
      setTeacher(course);
  }

  useEffect(() => {
    getTeacher()
  }, [])
  


  return (
    <div className='Teacher w-280 z-50 h-[2600px] overflow-hidden'>
        <img src={path} alt="" className='absolute top-[400px] left-[600px]'/>
        <img src={pathh} alt="" className='absolute top-[1900px] right-[600px]'/>
        {/* {/* <img src={pathh} alt="" className=' absolute'/> */}
        <div className='text-end z-40 mb-9 mt-9'>
        <h2 className='font-bold text-2xl mr-5 text-[#5c5c5c] text-right'>اساتید</h2>
            <div className='light bg-gray-200 text-gray-800 my-3 p-5 flex gap-2 flex-row-reverse rounded-2xl z-40 w-[100%]'>
                <p className='font-bold text-3xl z-40'> « خانه</p>
                <p className='font-bold text-3xl z-40'> اساتید </p>
            </div>
            
            <div className='my-15 z-40'>
              <TeachInfoHandler Teacher={Teacher}/>
            </div>
            
        </div>
    </div>
  )
}

export default Teacher