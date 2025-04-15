import { createBrowserRouter } from "react-router";
import Panel from "../../screens/Panel";
//import commonRoutes from "./common.router";
import Purchased from "../../components/panel/purchesed/Purchased";
import Purchaseds from "../../components/panel/Purchaseds";
import AddTicket from "../../components/panel/tickets/AddTicket";
const authRoutes = createBrowserRouter([
  {
    path: "/panel",
    element: <Panel />,
    children: [
      {
        index:true,
        path:"/panel",
        element:<Purchaseds/>
      },
      {
        path:"/panel/tickets",
        element:<AddTicket/>
      },
    ],
  },
]);
export default authRoutes;
