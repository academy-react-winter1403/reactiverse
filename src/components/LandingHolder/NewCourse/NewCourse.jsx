import React, { useEffect, useState } from 'react'
import BigTitle from '../../common/BigTitle'
import More from '../../common/More'
import CardsWrapper from './CardsWrapper'
import { getApi } from '../../../core/services/api'

const NewCourse = () => {
  const [topCourse, setTopCourse] = useState([])
  console.log(topCourse)

  const fetchData = async () => {
    const data = await getApi("/Home/GetCoursesTop?Count=4")
    setTopCourse(data)
  }
useEffect(() => {
  fetchData()
}, [])

return (
  <div className='pb-[200px]'>
    <BigTitle title="جدید ترین دوره ها"/>
    <div className='relative bottom-6'><More title2="مشاهده همه"/></div>
    <CardsWrapper topCourse={topCourse}/>
  </div>
  

)
}

export default NewCourse
