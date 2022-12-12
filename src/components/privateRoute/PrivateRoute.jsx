import React from "react";
import { Navigate } from "react-router-dom";
const token = localStorage.getItem("token");
const PrivateRoute = ({ children }) => {
  //   return token ? children : <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
