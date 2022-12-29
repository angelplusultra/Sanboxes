import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Protected from "./components/Protected";
import components from "./components/Home";
import Navbar from "./components/Navbar";
import userContext from "./userContext";
import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";

export default function Views() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <userContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Routes>
            <Route path="" element={<h1>Landing</h1>} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<h1>Register</h1>} />
            <Route path="home" element={<Protected />}>
              <Route index element={<components.Home />} />
            </Route>
          </Routes>
        </userContext.Provider>
      </Router>
    </div>
  );
}
