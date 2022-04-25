import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = useSelector((state) => state.reducerUser);
  return user.username ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
