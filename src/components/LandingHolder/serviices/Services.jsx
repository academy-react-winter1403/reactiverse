import React from 'react'
import BigTitle from '../../common/BigTitle'
import InfoCard from '../Newss/InfoCard'
import Slider from '../../common/Slider'

const Services = () => {
  return (
    <div className='h-auto'>
      <BigTitle title="خدمات"/>
      <InfoCard/>
      <Slider numerator="1" denominator="4"/>

    </div>
  )
}

export default Services
