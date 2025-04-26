import React from 'react'
import BigTitle from '../../common/BigTitle'
import Boxes from './Boxes'

const CategoryBoxes = () => {
  return (
    <div className='mt-[300px]'>
        <BigTitle title="دسته بندی"/>
        <div className='h-[450px] w-[80%] flex gap-[50px] m-auto mt-[100px]'>
            <Boxes text='فرانت اند'/>
            <Boxes text='بک اند'/>
            <Boxes text='امنیت'/>
            <Boxes text='هوش مصنوعی'/>
        </div>
    </div>
  )
}

export default CategoryBoxes
