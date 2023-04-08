import { createBrowserRouter } from "react-router-dom";
import ManagTrav from "./Admincomponents/ManagTrav";
import Show from "./Admincomponents/Show"
import Ma from "./Admincomponents/Managapp";
import Requests from "./Admincomponents/Requests";
import Tickets from "./Usercomponents/Tickets";
import Profile from "./Usercomponents/Profile";
import HistoryTickets from "./Usercomponents/HistoryTickets";
import Login from "./shared/login";
import Register from "./shared/register";
export const router = createBrowserRouter([


  {
    path: "/managetrav",
    element: <ManagTrav />
  },

  {
    path: "/show",
    element: <Show />
  },
  {
    path: "/manageappoint",
    element: <Ma />
  },
  {
    path: "/requests",
    element: <Requests />
  },
  {
    path: "/tickets",
    element: <Tickets />
  },
  {
    path: "/profile",
    element: < Profile />
  },
  {
    path: "/history",
    element: <HistoryTickets />
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
