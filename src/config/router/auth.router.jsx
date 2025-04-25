import { createBrowserRouter } from "react-router";
import Panel from "../../screens/Panel";
//import commonRoutes from "./common.router";
import Purchased from "../../components/panel/purchesed/Purchased";
import Purchaseds from "../../components/panel/Purchaseds";
import AddTicket from "../../components/panel/tickets/AddTicket";
import Courses from "../../components/Courses";
import ManupilatedCourses from "../../components/Courses/ManupilatedCourses"
const authRoutes = createBrowserRouter([
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
        element: <AddTicket />,
      },
      {
        path: "/panel/myCourses",
        element: <ManupilatedCourses/>,
      },
    ],
  },
]);
export default authRoutes;
