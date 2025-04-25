import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login";
import Register from "../../components/LoginForm/register";
import Error from "../../components/error/error.jsx";
import RegisterVerify from "../../components/LoginForm/verify/registerVerify/index.jsx";
import LoginVerify from "../../components/LoginForm/verify/loginVerify/index.jsx";
import { commonRoutes } from "./common.router.jsx";


export const authRoutes = createBrowserRouter([
    {...commonRoutes},
    {path:"/register" , element: <Register/>},
    {path:"/register/verify" , element:<RegisterVerify/>},
    {path:"/login" , element: <Login/>},
    {path:"/login/verify" , element:<LoginVerify/>},    
    {path:"*" , element:<Error/>}
])