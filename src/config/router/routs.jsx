import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login/index.jsx";
import Error from "../../components/error/error.jsx";
import Blog from "../../components/Blog/index.jsx";
import Courses from "../../components/Courses/index.jsx";
import Teacher from "../../components/Teachers/index.jsx";
import StepOne from "../../components/LoginForm/register/step1/index.jsx";
import StepTwo from "../../components/LoginForm/register/step2/index.jsx";
import StepThree from "../../components/LoginForm/register/step3/index.jsx";
import CourseDetail from "../../components/CourseDetail/index.jsx";
import BlogDetail from '../../components/BlogDetail/index.jsx'
import Landing from '../../components/LandingHolder/index.jsx'
import Roots from "../../components/roots.jsx";

export const Routes = createBrowserRouter([
    {path:"/registerStepOne" , element: <StepOne/>},
    {path:"/registerStepTwo" , element: <StepTwo/>},
    {path:"/registerStepThree" , element: <StepThree/>},
    {path:"/login" , element: <Login/>},
    {path:"*" , element:<Error/>},  
    {path:"/",
        element:<Roots/>,
        children:[
            {path:"/",element:<Landing/>},
            {path:"/teacher" , element:<Teacher/>},
            {path:"/blog" , element:<Blog/>},
            {path:"/blog/detail/:id",element:<BlogDetail/>},
            {path:"/courses" , element:<Courses/>},
            {path:"/courses/courseDetail/:courseId" , element:<CourseDetail/>}
        ]
    }
])