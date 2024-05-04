import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="text-center">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>

  }
  if (user?.email) {
    return children;
  }
  return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;