import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import { getApi } from '../../../core/services/api'

const CourseCards = ({data}) => {
  return (
    <div className='m-[25px] w-[280px] h-[400px]'>
      <CardHeader img={data.tumbImageAddress}/>
      <CardBody  title={data.title} desc={data.describe} name={data.teacherName} time={data.lastUpdate} price={data.cost}/>
    </div>
  )
}

export default CourseCards
