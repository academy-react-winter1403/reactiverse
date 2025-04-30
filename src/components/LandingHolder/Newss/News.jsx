import React from 'react'
import BigTitle from '../../common/BigTitle'
import InfoCard from './InfoCard'
import Slider from '../../common/Slider'

const News = () => {
  return (
    <div className='h-auto z-30'>
      <BigTitle title="آخرین اخبار"/>
      <InfoCard/>
      <Slider numerator="1" denominator="2"/>
    </div>
  )
}

export default News
