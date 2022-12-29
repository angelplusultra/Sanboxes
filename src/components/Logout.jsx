import { useContext } from "react";
import userContext from "../userContext";
import { Link, Navigate } from "react-router-dom";

function Logout() {
  const { user, setUser } = useContext(userContext);
  console.log(user);

  setUser(null);

  return <Navigate to="/login" />;
}
export default Logout;
