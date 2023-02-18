import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <h1 className="display-1 fw-bold text-white">404</h1> 
      <p className="fw-bold text-white">Page not found</p>
    </div>
  );
}