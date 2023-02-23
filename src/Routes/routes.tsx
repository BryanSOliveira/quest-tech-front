import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/error-page";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import HeaderHome from "../components/HomeHeader";
import HeaderDashboard from "../components/GameHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderHome /> <Home /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <><HeaderDashboard /><Dashboard /></>,
    errorElement: <ErrorPage />
  }
]);

export default router;