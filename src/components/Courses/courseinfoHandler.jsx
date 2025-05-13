import React from 'react'
import CourseInfo from './courseInfo'

const CourseInfoHandler = ({CourseList}) => {
  return (
    <div className='CourseInfoHandler rounded-xl overflow-hidden flex justify-center flex-wrap gap-5 border-solid w-3/4'>
        {CourseList.map((item,index) => {
            return <CourseInfo 
            key={index} 
            TeacherName={item.teacherName} 
            Cost={item.cost} 
            Title={item.title}
            Description={item.describe}
            Status={item.statusName}
            Technology={item.technologyList}
            Level={item.levelName}
            />
        })}
    </div>
  )
}

export default CourseInfoHandler