import layer1 from '../../../assets/img/Path 10.png'
import layer2 from '../../../assets/img/Path 11.png'
import BigTitle from '../../common/BigTitle'
import More from '../../common/More'
import pic from '../../../assets/img/111.png'
import React, { useEffect, useState } from 'react'

function InfoCard({img, title, desc}) {
  return (
    <div className=' w-[1000px] h-[500px] m-auto mt-[40px]'>
      <img src={layer1} alt="image" className='relative top-[-60px] left-[20px]'/>
      <img src={layer2} alt="image" className='relative top-[-500px] right-[20px] z-30'/>
      <div className='relative bottom-[820px] right-[50px] z-40'><BigTitle title="سرتیتر خبر"/></div>
      <h2 className='text-[#9b9b9b] w-[350px] z-40 relative bottom-[830px] right-[460px] pt-[40px]'>سلام این یه تکست کاملا رندوم برای پر کردن این قسمته داداش
من میدونم قراره اول بشیم پس با فدرت ادمه میدیم
نو اوری میکنیم و میترکونیم!
شک نداشته باش به زودی اونور میبینمت….</h2>
      <img src={pic} alt="" className='border-black bordr-[1px] size-60 z-40 relative bottom-[1030px] right-36'/>
        <div className='relative bottom-[990px] right-[780px]'><More title2="مشاهده  بیشتر"/></div>
    </div>
  )
}

export default InfoCard
