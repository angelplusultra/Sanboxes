import { useContext } from "react";
import userContext from "../userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, setUser } = useContext(userContext);
  return (
    <>
      {user ? (
        <>
          <Link to="home">Home</Link>
          <Link to="">Landing</Link>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <>
          <Link to="home">Home</Link>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
          <Link to="">Landing</Link>
        </>
      )}
    </>
  );
}
export default Navbar;
