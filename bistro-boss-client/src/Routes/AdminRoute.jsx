import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(user);
  console.log(loading);

  if (loading || isAdminLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default AdminRoute;
