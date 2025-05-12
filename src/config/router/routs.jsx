import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login/index.jsx";
import Error from "../../components/error/error.jsx";
import LoginVerify from "../../components/LoginForm/loginVerify/index.jsx";
import Blog from "../../components/Blog/index.jsx";
import Courses from "../../components/Courses/index.jsx";
import Teacher from "../../components/Teachers/index.jsx";
import StepOne from "../../components/LoginForm/register/step1/index.jsx";
import StepTwo from "../../components/LoginForm/register/step2/index.jsx";
import StepThree from "../../components/LoginForm/register/step3/index.jsx";
import CourseDetail from "../../components/CourseDetail/index.jsx";
import BlogDetail from '../../components/BlogDetail/index.jsx'
import Landing from '../../components/LandingHolder/index.jsx'
import Panel from "../../screens/Panel"

export const Routes = createBrowserRouter([
    {path:"/registerStepOne" , element: <StepOne/>},
    {path:"/registerStepTwo" , element: <StepTwo/>},
    {path:"/registerStepThree" , element: <StepThree/>},
    {path:"/login" , element: <Login/>},
    {path:"/login/verify" , element:<LoginVerify/>},    
    {path:"*" , element:<Error/>},
    {path:"/blog" , element:<Blog/>},
    {path:"/courses" , element:<Courses/>},
    {path:"/courses/courseDetail/:courseId" , element:<CourseDetail/>},    
    {path:"/teacher" , element:<Teacher/>},
    {path:"/",element:<Landing/>},
    {path:"/blog/detail/:id",element:<BlogDetail/>},
    {path:"/panel",element:<Panel/>}
])