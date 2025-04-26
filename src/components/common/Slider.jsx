import React from 'react'
import pic2 from "../../assets/img/Path 13.png"
import pic1 from "../../assets/img/Path 14.png"

const Slider = ({numerator,denominator}) => {
  return (
    <div className='w-10 h-20 relative bottom-[330px] right-[350px]'>
        <button><img src={pic1} className='relative right-[15px] ' alt="" /></button>
        <div className='relative size-9 m-auto font-light  text-[30px] text-justify mt-[3px]'>{numerator}/{denominator}</div>
        <button><img src={pic2} className='relative top-[10px] right-[12px]' alt="" /></button>
      
    </div>
  )
}

export default Slider


 





