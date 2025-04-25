import React from 'react'

const Purchased = ({purchaseName,payedMoney,className=''}) => {
  return (
    <div className={'select-none w-1/1 md:w-70 p-[7px] pr-[92px] relative rounded-2xl bg-[#F3F4F6] dark:text-white dark:bg-black '+' '+className}>
      <img className='dark:bg-gray-900 bg-blue-400 p-2 w-19 h-19 rounded-2xl absolute right-[10px] top-[-17px]' src="/resources/Path 33.png" alt="noImage" />
      <span className='text-xs'>{purchaseName}</span>
        <p className='text-xl pb-2'>{payedMoney}</p>
    </div>
  )
}

export default Purchased