import React from 'react'

const More = ({title2}) => {
  return (
    <div className='flex'>
      <h3 className='z-30'>{title2}</h3>
      <h2 className='w-7 h-[3px] bg-[#777] relative top-3 right-2 z-30' ></h2>
    </div>
  )
}

export default More
