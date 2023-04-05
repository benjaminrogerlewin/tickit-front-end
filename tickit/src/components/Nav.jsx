import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../logo.svg";
import Login from "./Login";
import SignUp from "./SignUp";

function Nav() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div id="navbar">
      <Link to="/">
        <img id="tickit-logo" src={logo} alt="tickit logo" />
      </Link>

      <div id="links-container">
        <Link to="/Events">
          <p>Events</p>
        </Link>

        <Link to="/Login">
          <p>Login</p>
        </Link>

        <Link to="/SignUp">
          <button className="primary-button">Sign Up</button>
        </Link>

        {loginOpen && <Login setOpenLogin={setLoginOpen} />}
        {registerOpen && <SignUp setOpenRegister={setRegisterOpen} />}
      </div>
    </div>
  );
}

export default Nav;
