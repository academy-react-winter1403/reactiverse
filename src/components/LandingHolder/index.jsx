import React from 'react'
import HeroSection from './heroSection/heroSection'
import NewCourse from './NewCourse/NewCourse'
import News from './Newss/News'
import BestSellers from './bestSellers/BestSellers'
import Services from './serviices/services'
import UserCounter from './userCounter/UserCounter'
import CategoryBoxes from './category-boxes/CategoryBoxes'
import Background from './Background'


const LandingHolder = () => {
  return (
    <div className='h-[6000px]'>
      <Background/>
        <HeroSection/>
        <NewCourse />
        <News/>
        <BestSellers/>
        <Services/>
        <UserCounter/>
        <CategoryBoxes/>
    </div>
  )
}

export default LandingHolder