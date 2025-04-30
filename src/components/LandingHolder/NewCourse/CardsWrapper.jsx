import React from 'react'
import CourseCards from './CourseCards'
import { getApi } from '../../../core/services/api'

const CardsWrapper = ({topCourse}) => {
  return (
    <div className='grid grid-cols-4 relative left-[60px] gap-[50px] w-[1300px] z-[100] mt-10'>
      {
        topCourse?.map((item) => {
          return(
            <div className=''>
            <CourseCards key={item.courseId} data={item}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardsWrapper
