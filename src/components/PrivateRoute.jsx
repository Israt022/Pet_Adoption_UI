import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  
  if (user === null) {
    return (
        <div className="flex justify-center mt-16 mb-50">
            <span className="loading loading-spinner text-yellow-500"></span>
          </div>
    )
  }
  return user ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;