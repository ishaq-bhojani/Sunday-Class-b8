import { Navigate, useLocation } from "react-router-dom";
import { useIsLoggedIn } from "./Auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
