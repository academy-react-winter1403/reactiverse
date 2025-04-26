import React , {useEffect , useState} from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import CourseDetailHandler from './CourseDetailHandler'
import { GetCourseList } from '../../core/services/api/Courses'
import './CourseDetailResponsive.css'

const CourseDetail = () => {

  const [CourseList, setCourseList] = useState([]);

const getList = async() =>{
    const course = await GetCourseList(); 
    setCourseList(course);
}
useEffect(() => {
  getList();
}, [])


  return (
    <div className='Detail w-[1100px]'>
        <Header/>
        <CourseDetailHandler CourseList={CourseList}/>
        <Footer/>
    </div>
  )
}

export default CourseDetail