import { getApi } from '../../../core/services/api'
import React, { useEffect, useState } from 'react'

const Items = ({title , data}) => { 
  

  return (
    <div className='w-[20%] h-[110px] z-40'>
      <h2 className='text-[#9d9d9d] text-[18px] text-center p-3'> {data} </h2>
      <h3 className='text-[#555] text-[19px] text-center'> {title} </h3>
    </div>
  )
}

export default Items
