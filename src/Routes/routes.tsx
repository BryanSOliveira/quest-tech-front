import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/error-page";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  }
]);

export default router;