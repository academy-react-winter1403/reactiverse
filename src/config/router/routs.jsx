import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login/index.jsx";
// import Register from "../../components/LoginForm/register/index.jsx";
import Error from "../../components/error/error.jsx";
// import RegisterVerify from "../../components/LoginForm/verify/registerVerify/index.jsx";
import LoginVerify from "../../components/LoginForm/loginVerify/index.jsx";
import Blog from "../../components/Blog/index.jsx";
import Courses from "../../components/Courses/index.jsx";
import Teacher from "../../components/Teachers/index.jsx";
import StepOne from "../../components/LoginForm/register/step1/index.jsx";
import StepTwo from "../../components/LoginForm/register/step2/index.jsx";
import StepThree from "../../components/LoginForm/register/step3/index.jsx";


export const Routes = createBrowserRouter([
    // {path:"/register" , element: <Register/>},
    {path:"/registerStepOne" , element: <StepOne/>},
    {path:"/registerStepTwo" , element: <StepTwo/>},
    {path:"/registerStepThree" , element: <StepThree/>},
    // {path:"/register/verify" , element:<RegisterVerify/>},
    {path:"/login" , element: <Login/>},
    {path:"/login/verify" , element:<LoginVerify/>},    
    {path:"*" , element:<Error/>},
    {path:"/blog" , element:<Blog/>},
    {path:"/courses" , element:<Courses/>},
    {path:"/teacher" , element:<Teacher/>}
])