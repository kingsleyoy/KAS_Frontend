import React from "react";
import { Navigate } from "react-router-dom";

const NotAuth = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return <div>NotAuth</div>;
};

export default NotAuth;
