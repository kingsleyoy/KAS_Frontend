import React from "react";
import { useDispatch } from "react-redux";
import { setLogOut } from "../redux/Reducers";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
    dispatch(setLogOut());
  };
  return <button onClick={handleLogOut}>Logout</button>;
};

export default LogOut;
