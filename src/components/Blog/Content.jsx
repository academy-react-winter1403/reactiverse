import React from 'react'
import News from './News'

const Content = ({NewsList,Query}) => {

    const remove = document.getElementsByClassName("remove");

    if (Query > "0") {
        Array.from(remove).forEach(element => {
            element.classList.remove('h-90');
        })
    }
    if(Query < '0'){
        Array.from(remove).forEach(element => {
            element.classList.add('h-90');
        })
    }

return (
    <div className='w-full'>
        <div className='flex justify-between gap-4 border-solid p-3 my-10'>
            {NewsList.slice(0,4).map((item,index) => {
            return <News key={index} title={item.title} description={item.miniDescribe}/>
        })}
        </div>
        <div className='BigPic remove h-90 w-full relative overflow-hidden'>
            <img className='w-full absolute ' src='./5.png'/>
            <div className='bg-black flex flex-wrap  w-full h-full opacity-50 z-30 text-white'>
                <h2 className='text-5xl self-center mx-auto'>سرتیتر خبر</h2>
                <p className='p-5 mx-auto w-full'>این یک متن تست برای وبلاگ آکادمی سپهر است این یک متن برای وبلاگ اکادمی سپهر است این یک متن برای وبلاگ اکادمی سپهر است این یک متن تست برای وبلاگ آکادمی سپهر است این یک متن برای وبلاگ اکادمی سپهر است این یک متن برای وبلاگ اکادمی سپهر است</p>
            </div>
        </div>
        <div className='flex gap-4 border-solid m-10'>  
            {NewsList.slice(5,9).map((item,index) => {
            return <News key={index} title={item.title} description={item.miniDescribe}/>
        })}
        </div> 
    </div>
)
}

export default Content