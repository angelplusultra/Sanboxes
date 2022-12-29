import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import userContext from "../userContext";

function Protected() {
  const { user } = useContext(userContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
