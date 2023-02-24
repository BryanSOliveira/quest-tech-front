import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/error-page";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import HeaderHome from "../components/HomeHeader";
import HeaderDashboard from "../components/GameHeader";
import GameAreas from "../Pages/GameAreas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderHome /><Home /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <><HeaderDashboard /><Dashboard /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/singleplayer",
    element: <><HeaderDashboard /><GameAreas /></>,
    errorElement: <ErrorPage />
  },
]);

export default router;