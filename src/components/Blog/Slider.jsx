import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Content from './Content'
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({NewsList,Query,swiperRef}) => {
  return (
    <Swiper       
      onSwiper={(swiper) => (swiperRef.current = swiper)} // ذخیره instance
      slidesPerView={1}
      className="duration-500 relative right-0 w-full flex">
      <SwiperSlide><Content NewsList={NewsList} Query={Query}/></SwiperSlide>
      <SwiperSlide><Content NewsList={NewsList} Query={Query}/></SwiperSlide>
      <SwiperSlide><Content NewsList={NewsList} Query={Query}/></SwiperSlide>     
    </Swiper>
  )
}

export default Slider