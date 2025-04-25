import { createBrowserRouter } from "react-router-dom";
import Landing from "../../screens/Landing";
import BlogDetail from "../../screens/BlogDetail";
export const commonRoutes=createBrowserRouter([
    {path:"/",element:<Landing/>},
    {path:"/blog/detail/:id",element:<BlogDetail/>}
])