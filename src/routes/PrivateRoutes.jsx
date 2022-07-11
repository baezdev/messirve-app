import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, isLoggin }) => {
  if (isLoggin) {
    return children;
  }

  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoutes;
