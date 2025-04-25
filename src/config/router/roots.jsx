import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login";
import Register from "../../components/LoginForm/register";
import Error from "../../components/error/error.jsx";
import RegisterVerify from "../../components/LoginForm/verify/registerVerify/index.jsx";
import LoginVerify from "../../components/LoginForm/verify/loginVerify/index.jsx";
//import { createBrowserRouter } from "react-router";
import Panel from "../../screens/Panel";
//import commonRoutes from "./common.router";
import Purchased from "../../components/panel/purchesed/Purchased";
import Purchaseds from "../../components/panel/Purchaseds";
import AddTicket from "../../components/panel/tickets/AddTicket";
import Courses from "../../components/Courses";
import ManupilatedCourses from "../../components/Courses/ManupilatedCourses";
import TicketHandler from "../../components/panel/tickets/TicketHandler.jsx";
import commonRoutes from "./common.router.js";

export const authRoutes = createBrowserRouter([
  {
    ...commonRoutes,
  },
  { path: "/register", element: <Register /> },
  { path: "/register/verify", element: <RegisterVerify /> },
  { path: "/login", element: <Login /> },
  { path: "/login/verify", element: <LoginVerify /> },
  { path: "*", element: <Error /> },
  {
    path: "/panel",
    element: <Panel />,
    children: [
      {
        index: true,
        path: "/panel",
        element: <Purchaseds />,
      },
      {
        path: "/panel/tickets",
        element: <TicketHandler />,
      },
      {
        path: "/panel/myCourses",
        element: <ManupilatedCourses />,
      },
    ],
  },
]);
