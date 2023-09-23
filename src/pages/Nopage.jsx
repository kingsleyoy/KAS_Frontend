import React from "react";
import { Navigate } from "react-router-dom";

const Nopage = () => {
  if (true) {
    return <Navigate to={"/"} />;
  }
  return <div>Nopage</div>;
};

export default Nopage;
