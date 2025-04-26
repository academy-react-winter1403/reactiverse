import React from 'react'
import Img1 from '../../../assets/img/Image 3.png'
import Img2 from '../../../assets/img/Image 4.png'
import Img3 from '../../../assets/img/Image 5.png'

const Boxes = ({text}) => {
  return (
    <div className='w-[300px] h-[300px] rounded-2xl bg-white shadow-xl p-[20px]'>
      <img src={Img1} alt="image" className='m-auto'/>
      <h2 className='font-bold text-[#555] text-[22px] flex justify-center mt-[-10px]'>{text}</h2>
      <h3 className='text-[#6b6b6b] text-[13px] flex justify-center'>توضیحات کوچیک درباره دسته بندی</h3>
    </div>
  )
}


export default Boxes
