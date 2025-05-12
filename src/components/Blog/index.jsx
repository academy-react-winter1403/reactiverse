import React , { useRef, useState, useEffect }from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Slider from './Slider'
import { GetNewsList } from '../../core/services/api/News'
import SearchBar from '../common/SearchBar'
import './Blogresponsive.css'

const Blog = () => {

  const [Count, setCount] = useState(1)
  const [Query, setQuery] = useState("")
  const [flag, setFlag] = useState(false)
  const [NewsList, setNewsList] = useState([]);
  const swiperRef = useRef();

  const handleFlag = () => {
    setFlag(!flag)
  }
  
  const right = () => {
    if (swiperRef.current && Count < 3){
      swiperRef.current.slideNext();
      setCount(Count + 1);
    }
  };
  const left = () => {
    if (swiperRef.current && Count > 1){
      swiperRef.current.slidePrev();
      setCount(Count - 1);
    }
  };

  const  getNews = async() =>{
      const course = await GetNewsList(Query); 
      setNewsList(course);
  }

  useEffect(() => {
    getNews()  
  },[flag])
  


  return (
    <div className='Blog bg-transparent max-w-280'>
      <SearchBar NewsList={NewsList} setQuery={setQuery} handleFlag={handleFlag}/>
      <div className='h-28 flex items-center justify-center'>
        <span className='border-b-7 border-gray-500 border-solid text-left w-120 font-bold text-gray-500 text-xl'>1404/01/4</span>
        <span className='text-gray-500 font-bold text-2xl w-40'>روزنامه سپهر</span>
        <span className='border-b-7 border-gray-500 border-solid text-right text-xl text-gray-500 font-bold w-120'>رونامه سپهر</span>  
      </div>      
      <div className='light bg-gray-200 rounded-2xl w-full relative overflow-hidden mb-10'>
        <Slider NewsList={NewsList} Query={Query} swiperRef={swiperRef}/>
        <div className='Buttons flex h-8 justify-center mb-5'>
          <img className='cursor-pointer w-8' onClick={left} src='./left.png'/>
          <div className='border-3 border-black border-solid rounded-lg text-2xl/[1] font-semibold w-9 '>{Count}</div>
          <img className='cursor-pointer' onClick={right} src='./right.png'/>
        </div>               
      </div>
    </div>
  )
}

export default Blog
