import { createBrowserRouter } from "react-router-dom";
import Login from "./shared/login";
import Register from "./shared/register";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
