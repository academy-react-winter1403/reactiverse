import React, { useEffect, useState } from 'react'
import BigTitle from '../../common/BigTitle'
import CardsWrapper from '../NewCourse/CardsWrapper'
import More from '../../common/More'
import { getApi } from '../../../core/services/api'

const BestSellers = () => {

  
  const [topCourse, setTopCourse] = useState([])
  console.log(topCourse)

  const fetchData = async () => {
    const data = await getApi("/Home/GetCoursesTop?Count=8")
    setTopCourse(data)
  }
useEffect(() => {
    fetchData()
}, [])

  return (
    <div className='pb-[200px] mt-[150px] '>
      <BigTitle title="پرفروش ترین دوره ها"/>
      <div className='relative bottom-6 right-[1500px]'><More title2="مشاهده همه"/></div>
      <div className=''><CardsWrapper topCourse={topCourse}/></div>
    </div>
  )
}

export default BestSellers
