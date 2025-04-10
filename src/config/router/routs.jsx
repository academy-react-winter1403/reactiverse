import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login/index.jsx";
import Register from "../../components/LoginForm/register/index.jsx";
import Error from "../../components/error/error.jsx";
import RegisterVerify from "../../components/LoginForm/verify/registerVerify/index.jsx";
import LoginVerify from "../../components/LoginForm/verify/loginVerify/index.jsx";
import Blog from "../../components/Blog/index.jsx";
import Courses from "../../components/Courses/index.jsx";
import Teacher from "../../components/Teachers/index.jsx";


export const Routes = createBrowserRouter([
    {path:"/register" , element: <Register/>},
    {path:"/register/verify" , element:<RegisterVerify/>},
    {path:"/login" , element: <Login/>},
    {path:"/login/verify" , element:<LoginVerify/>},    
    {path:"*" , element:<Error/>},
    {path:"/blog" , element:<Blog/>},
    {path:"/courses" , element:<Courses/>},
    {path:"/teacher" , element:<Teacher/>}
])