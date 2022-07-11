import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children, isLoggin }) =>
  isLoggin ? <Navigate to={"/"} /> : children;

export default PublicRoutes;
