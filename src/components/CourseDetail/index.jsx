import React , {useEffect , useState} from 'react'
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
        <CourseDetailHandler CourseList={CourseList}/>
    </div>
  )
}

export default CourseDetail