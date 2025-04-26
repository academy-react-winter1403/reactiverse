import React from 'react'
import CourseCards from './CourseCards'
import { getApi } from '../../../core/services/api'

const CardsWrapper = ({topCourse}) => {
  return (
    <div className='grid grid-cols-4 m-auto gap-[50px] w-[1300px]'>
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
