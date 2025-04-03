import React from 'react'

const News = ({title,description}) => {    
  return (
    <div className='News w-65 relative overflow-hidden' dir='rtl'>
        <img className='w-full' src='./5.png'/>
        <div className='text-start'>
            <p className='NewsTitle text-2xl font-bold w-full mb-5 line-clamp-2'>{title}</p>
            <p className='NewsDesc w-full line-clamp-2'>{description}</p>
        </div>
    </div>
  )
}

export default News