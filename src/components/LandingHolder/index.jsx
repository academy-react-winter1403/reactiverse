
import React from 'react'
import HeroSection from './heroSection/heroSection'
import Header from '../common/Header'
import Footer from '../common/Footer'
import NewCourse from './NewCourse/NewCourse'
import News from './Newss/News'
import BestSellers from './bestSellers/BestSellers'
import Services from './serviices/services'
import UserCounter from './userCounter/UserCounter'
import CategoryBoxes from './category-boxes/CategoryBoxes'
import Background from './Background'


const LandingHolder = () => {
  return (
    <div>
      <Background/>

        <Header/>

        <HeroSection/>
        <NewCourse />
        <News/>
        <BestSellers/>
        <Services/>
        <UserCounter/>
        <CategoryBoxes/>
        
        <Footer/>
    </div>
  )
}

export default LandingHolder