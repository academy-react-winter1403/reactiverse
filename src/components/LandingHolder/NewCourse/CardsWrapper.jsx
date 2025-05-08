import React from 'react'
import CourseCards from './CourseCards'

const CardsWrapper = ({topCourse}) => {
  return (
    // <div className='grid grid-cols-4 relative left-[60px] gap-[50px] w-[1300px] z-[100] mt-10'>
    <div className='flex justify-between flex-wrap'>
      {
        topCourse?.map((item) => {
          return(
            <div>
            <CourseCards key={item.courseId} data={item}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardsWrapper
