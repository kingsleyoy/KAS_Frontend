import React from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/Reducers";

const RedirectOpenToAll = () => {
  const dispatch = useDispatch();
  if (true) {
    dispatch(setAuth(false));
  }
  return <div>RedirectOpenToAll</div>;
};

export default RedirectOpenToAll;
