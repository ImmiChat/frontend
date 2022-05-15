import React from "react";
import { Navigate } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";

const ProtectedRoute = ({ children }) => {
  const context = React.useContext(AuthenticationContext);
  if (!context.user.isAuth) {
    console.log(context);
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
