import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { GetCourseList } from '../../core/services/api/Courses';
import { useState } from 'react';
import { useEffect } from 'react';
import CourseInfoHandler from './courseinfoHandler';
import SearchBar from '../common/SearchBar';
import './CoursesResponsive.css'

const Courses = () => {
const [Query, setQuery] = useState("")
const [flag, setFlag] = useState(false)
const [CourseList, setCourseList] = useState([]);
const [originalList, setOriginalList] = useState([]);
const [Completed, setCompleted] = useState(false);
const [Price, setPrice] = useState(150000000)
const [isFiltered, setIsFiltered] = useState(false);


const handleFlag = () => {
    setFlag(!flag)
}

const deleteFilter = () => {
    if(isFiltered && originalList.length) {
    setCourseList(originalList) 
    setIsFiltered(false)
    }

}

const complete = () =>{
    setCompleted(prevState => !prevState);

    if(!Completed){
        setOriginalList(CourseList)
        const check = CourseList.filter(course => course.statusName === "منقضی شده")
        setCourseList(check)
        setIsFiltered(true)
    }
    else{
        setCourseList(originalList)
    }
}

const filterByTechnology = (tech) => {
    setOriginalList(CourseList)
    const check = CourseList.filter(course => course.technologyList.includes(tech))
    setCourseList(check)
    setIsFiltered(true)
}

const abcd = (level) => {
    setOriginalList(CourseList)
    const check = CourseList.filter(course => course.levelName === level)
    setCourseList(check)
    setIsFiltered(true)
}

const showPrice = () => {
    if(!originalList.length){
        setOriginalList(CourseList)
    }
    if (Price === "150000000") {
        setCourseList(originalList)
    }
    else {
        const priceChecker = originalList.filter(course => course.cost < Price);
        setCourseList(priceChecker)  
        setIsFiltered(true);  
    }

}

const getList = async() =>{
    const course = await GetCourseList(Query); 
    setCourseList(course);
}

useEffect(() => {
    getList();
}, [flag])



  return (
    <div className='Courses w-[1100px]'>
        <Header/>
        <div className='mb-15 text-left bg-transparent flex justify-between dark'><p className='ml-5 font-bold'>دوره آموزشی 5</p><h2 className='font-bold text-2xl mr-5'>دوره ها</h2></div>
        <div className='mb-15 w-full'>
        <SearchBar CourseList={CourseList} setQuery={setQuery} handleFlag={handleFlag}/>
            <div className='Main relative flex flex-row-reverse gap-2'>  
                <div className='Filters dark bg-gray-700 font-bold rounded-xl mt-7 h-69 w-1/4'>
                    <div onClick={deleteFilter} className='border-2 border-gray-400 rounded-xl m-2 p-2 hover:bg-gray-600'>حذف فیلتر ها</div>
                    <div className='flex justify-between border-2 border-gray-400 rounded-xl m-2 p-2'>
                        <div onClick={complete} className='border-2 border-gray-400 border-solid w-10 h-6 relative rounded-2xl cursor-pointer'>
                            <div>
                                <div className={`bg-gray-400 h-4 w-4 absolute top-0.5 ${Completed ? 'right-0.5' : 'left-0.5'} rounded-2xl`}></div>
                            </div>
                        </div>
                        <div>تکمیل شده</div>
                    </div>
                    <div className='group border-2 border-gray-400 rounded-xl m-2 relative cursor-pointer'>
                        <div className='flex justify-between p-2'>
                            <img className='mt-2 w-4 h-3 rounded-[4px] bg-gray-500' src='./7.png'/>
                            <div>تکنولوژی</div>                            
                        </div>
                        <div className='absolute rounded-b-2xl w-full h-0 duration-300 overflow-hidden outline-0 outline-gray-400 dark bg-gray-700 z-50 group-hover:h-44 group-hover:outline-2'>
                            <h2 onClick={() => filterByTechnology("123React")}  className='border-2 p-1 border-gray-400 mb-2 rounded-b-2xl hover:bg-red-600'> 123React</h2>
                            <h2 onClick={() => filterByTechnology("NextJs")} className='border-2 p-1 border-gray-400 mb-2 rounded-2xl hover:bg-amber-600'>NextJs</h2>
                            <h2 onClick={() => filterByTechnology("فرانت اند2")} className='border-2 p-1 border-gray-400 mb-2 rounded-2xl hover:bg-yellow-400'>فرانت اند2</h2>
                            <h2 onClick={() => filterByTechnology("بک اند 123")} className='border-2 p-1 border-gray-400 mb-2 rounded-2xl hover:bg-lime-500'>بک اند 123</h2>                            
                        </div>
                    </div>
                    <div className='group border-2 border-gray-400 rounded-xl m-2 relative cursor-pointer'>
                        <div className='flex justify-between p-2'>
                            <img className='mt-2 w-4 h-3 rounded-[4px] bg-gray-500' src='./7.png'/>
                            <div>دسته بندی</div>                            
                        </div>
                        <div className='absolute rounded-b-2xl w-full h-0 duration-300 overflow-hidden outline-0 outline-gray-400 dark bg-gray-700 group-hover:h-34 group-hover:outline-2'>
                            <h2 onClick={() => abcd("نامبتدی 1233")} className='border-2 p-1 border-gray-400 mb-2 rounded-b-2xl hover:bg-blue-700'>نامبتدی 1234</h2>
                            <h2 onClick={() => abcd("متوسط")} className='border-2 p-1 border-gray-400 mb-2 rounded-2xl hover:bg-cyan-500'>متوسط</h2>
                            <h2 onClick={() => abcd("پیشرفته")} className='border-2 p-1 border-gray-400 mb-2 rounded-2xl hover:bg-green-600'>پیشرفته</h2>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 rounded-xl m-2'>
                        <output className='block'>{Price} از0 تا</output>
                        <input 
                        className='Price appearance-none w-50 accent-gray-500 bg-red-700 h-2 rounded-lg cursor-pointer'
                        type='range' 
                        value={Price} 
                        step="10000" 
                        min="20000" 
                        max="150000000" 
                        onChange={(e) => setPrice(Number(e.target.value))}
                        onInput={showPrice}/>                         
                    </div>                                                           
                </div>  
                <CourseInfoHandler CourseList={CourseList}/>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default Courses