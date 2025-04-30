import React from 'react'
import CourseInfo from './courseInfo'
import { Link } from 'react-router-dom'

const CourseInfoHandler = ({CourseList}) => {
  return (
    <div className='CourseInfoHandler rounded-xl overflow-hidden flex justify-center flex-wrap gap-3 border-solid border-red-700 w-3/4'>
        {CourseList.map((item,index) => {
            return(
              <Link to={`/courses/courseDetail/${item.courseId}`} key={index} >
                <CourseInfo 
                TeacherName={item.teacherName} 
                Cost={item.cost} 
                Title={item.title}
                Description={item.describe}
                Status={item.statusName}
                Technology={item.technologyList}
                Level={item.levelName}
                />
              </Link>
            ) 
        })}
    </div>
  )
}

export default CourseInfoHandler