import React , {useState , useEffect} from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { TeachInfoHandler } from './TeachInfoHandler'
import { GetTeachersInfo } from '../../core/services/api/teacher'
import './teacherResponsive.css'

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
    <div className='Teacher w-280'>
        <Header/>
        <div className='text-end'>
            <h2 className='text-3xl font-bold pb-10'>اساتید</h2>
            <div className='light bg-gray-200 my-3 p-5 flex gap-2 flex-row-reverse rounded-2xl'>
                <p className='font-bold text-3xl'> « خانه</p>
                <p className='font-bold text-3xl'> اساتید </p>
            </div>
            <div className='my-15'>
              <TeachInfoHandler Teacher={Teacher}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Teacher