import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Similar from './similar'

const CourseDetailHandler = ({CourseList}) => {

    const { courseId } = useParams()
    const [course, setCourse] = useState()
    const [input , setInput] = useState()


useEffect(() => {
    const selectedCourse = CourseList.find(item => item.courseId.toString() === courseId)
    setCourse(selectedCourse)
}, [CourseList,courseId])

if (!course) {
    return  <div className="text-center m-10">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
                <h2 className="text-white light:text-black mt-4">Loading...</h2>
            </div>
}

const OnSubmit = () => {
    setInput('')
}

return (
    <div>
        <div className='Buy py-2 relative my-5 flex gap-7 justify-center items-center h-70 rounded-2xl '>
            <div className='absolute top-0 w-full h-full bg-[url(".\assets\img\5bXkwppbwaAIC7LQPqkfr9MSFjkA04NixdFNVwZu.png")] bg-[#412727] rounded-2xl'></div>
            {/* <img src='../../../public/12.png' className='BuyImg relative rounded-3xl w-90 h-60  z-100'/> */}
            <div className='text-right z-100 w-full h-70 py-5 relative text-white'>
                <div className="relative top-8 right-8">
                    <h2 className='font-bold text-3xl px-5'>{course.title}</h2>
                    <p className='my-2 px-5 '>{course.describe}</p>
                </div>
                <div className='flex justify-between  w-full font-bold text-xl pr-12 mt-[50px]'>
                    <button className='bg-[#38566b] p-2 rounded-xl w-[200px] h-[40px] mt-[50px]'>خرید نقدی دوره</button>
                    <div className='p-4 mt-[50px]'>{course.cost}تومان</div>
                </div>
            </div>
            <img src='../../../public/12.png' className='BuyImg relative right-[20px] rounded-3xl w-90 h-60  z-100'/>

            
        </div>
        <div className='main mb-3 flex flex-row-reverse gap-2'>
            <div className='description light bg-gray-200 w-2/3 h-138 rounded-2xl mt-2 text-end p-3'>
                <h2 className='mb-2 text-3xl font-bold text-[#38566b]'>توضیحات</h2>
                <p> این یک متن توضیحات ساختگی است که من
                    درست کردم به دلیل نبود متن موردنیاز که به اندازه کافی طولانی باشد در ای پی
                    آی این یک متن توضیحات ساختگی است که من درست کردم به دلیل نبود متن موردنیاز
                    که به اندازه کافی طولانی باشد در ای پی آی این یک متن توضیحات ساختگی است که 
                    من درست کردم به دلیل نبود متن موردنیاز که به اندازه کافی طولانی باشد در ای پی
                    آی این یک متن توضیحات ساختگی است که من درست کردم به دلیل نبود متن موردنیاز
                    که به اندازه کافی طولانی باشد در ای پی آی این یک متن توضیحات ساختگی است که 
                    من درست کردم به دلیل نبود متن موردنیاز که به اندازه کافی طولانی باشد در ای پی
                    آی این یک متن توضیحات ساختگی است که من درست کردم به دلیل نبود متن موردنیاز
                    که به اندازه کافی طولانی باشد در ای پی آیاین یک متن توضیحات ساختگی است که من 
                    درست کردم به دلیل نبود متن موردنیاز که به اندازه کافی طولانی باشد در ای پی آی </p>
            </div>
            <div className='side w-1/3'>
                <div className='light bg-gray-200  rounded-2xl'>
                    <div className='flex justify-center border-b-2 border-gray-400 m-2'>
                        <div className='p-2 text-[#38566b] font-bold'>{course.teacherName}</div>
                        <img className='w-10 h-10 rounded-3xl' src='../../../public/8.png'/>
                    </div>
                    <p className='p-2'>اطلاعات در مورد اطلاعات در مورد آموزگاراطلاعات در مورد آموزگاراطلاعات در مورد آموزگاراطلاعات در مورد آموزگاراطلاعات در مورد آموزگاراطلاعات در مورد آموزگاراطلاعات در مورد آموزگاراطلاعات در مورد آموزگار</p>
                </div>
                <div className='light bg-gray-200 mt-2 p-1 rounded-2xl'>
                    <div className='p-2 text-[#38566b] text-end text-xl font-bold'>دوره های مشابه</div>
                    <Similar Title={course.title}/>
                    <Similar Title={course.title}/>
                    <Similar Title={course.title}/>
                    <Similar Title={course.title}/>
                </div>
            </div>
        </div>
        <div className='comments light bg-gray-200 w-160 p-3 mb-10 rounded-2xl justify-self-end'>
            <div className=' font-bold text-2xl text-end pb-5 text-[#38566b]'>نظرات</div>
            <input value={input} onChange={(x) => setInput(x.target.value)} className='w-full border-2 outline-0 text-end text-xl p-2 border-gray-500 rounded-2xl h-40'/>
            <button onClick={OnSubmit} className='font-bold justify-self-end p-2 mt-3 rounded-xl block outline-0 bg-[#38566b] text-white'>ارسال نظر</button>
        </div>
    </div>
)
}

export default CourseDetailHandler