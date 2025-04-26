import React from 'react'
import path1 from '../../assets/img/Path 3.png'
import path2 from '../../assets/img/Path 8.png'
import path3 from '../../assets/img/Path 9.png'
import path4 from '../../assets/img/Image 1.png'
import path5 from '../../assets/img/path 15.png'
import path6 from '../../assets/img/path 16.png'
import path7 from '../../assets/img/Image 6.png'
import path8 from '../../assets/img/path 19.png'
import path9 from '../../assets/img/path 17.png'
import path10 from '../../assets/img/path 18.png'
import path11 from '../../assets/img/Image 2.png'

const Background = () => {
  return (
    <div>
      <img className='absolute right-[-100px] top-[-100px]' src={path1} alt="" />
      <img className='absolute top-[1200px] left-[-40%] z-[-100]' src={path2} alt="" />
      <img className='absolute top-[1550px] left-[-150px] z-[-50]' src={path3} alt="" />
      <img className='absolute top-[1600px] left-[530px] z-[-50]' src={path4} alt="" />
      <img className='absolute top-[3100px] right-[-800px] z-[-100]' src={path5} alt="" />
      <img className='absolute top-[3900px] z-[-50]' src={path6} alt="" />
      <div>
        <img className='h-[370px] absolute top-[4300px] z-[-50]' src={path7} alt="" />
        <img className='absolute top-[4664px] right-[560px] z-[-50]' src={path8} alt="" />
      </div>
      <img className='absolute top-[4000px] right-[1000px] z-[-50]' src={path9} alt="" />
      <img className='absolute top-[5000px] right-[560px] z-[-50]' src={path10} alt="" />
      <img className='absolute top-[5550px] right-[515px] z-[-50]' src={path11} alt="" />
    </div>
  )
}

export default Background
