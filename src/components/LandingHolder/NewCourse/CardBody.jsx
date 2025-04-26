import React from 'react'

const CardBody = ({title, desc, name, price, time}) => {
  return (
    <div className='bg-white w-[100%] h-[84%] relative bottom-[150px] rounded-3xl pt-[140px] pr-[17px]'>
      <h2 className='font-bold text-[18px] '>{title}</h2>
      <h3 className='truncate text-[#9b9b9b] w-[90%]  pt-[10px]'>. {desc} </h3>
      <h4 className='pt-[20px] pb-[20px] text-sm text-[#23496b]'>.{name} </h4>
      <h1 className='w-[90%] h-[1px] bg-slate-300'></h1>
      <div className='flex mt-[20px]'><h3 className='w-[80px] h-[22px] rounded-xl bg-slate-400 text-center text-white ml-[50px]'> {time} </h3><h2 className='text-[#23496b] text-[19px]'>{price}</h2></div>
    </div>
  )
}

export default CardBody
