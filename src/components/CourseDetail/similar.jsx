import React from 'react'

const Similar = ({Title}) => {
return (
    <div className='border-1 rounded-xl font-bold flex justify-between p-2 m-2 items-center'>
        <span>{Title}</span>
        <img className='w-15 h-10 rounded-md' src='../../../public/12.png'/>
    </div>
)
}

export default Similar