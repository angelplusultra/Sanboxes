import { useContext, useState } from "react";
import userContext from "../userContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser(inputValue);

    navigate("/home");
  };
  const [inputValue, setInputValue] = useState("");
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} type="text" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
