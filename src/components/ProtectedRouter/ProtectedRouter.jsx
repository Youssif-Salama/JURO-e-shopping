import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = (props) => {
  if (localStorage.getItem("userToken") === null)
    return <Navigate to={"/login"} />;
  else return props.children;
};

export default ProtectedRouter;
