// import "../Modal.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminVenues from "./AdminVenues";

function Login() {

  const initialState = { username: "", password: "" };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
  };

  return (
    <div className="form-container">

      <div className="form-img" id="login-img">
      </div>
      
      <div className='form-body'>
        <div className="form-content">
          <p className="form-title">Login</p>
          <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className='input-prompt'>EMAIL</label><br></br>
            <input
              id="email"
              className="input"
              type="text"
              onChange={handleChange}
              value={formState.username}
            /><br></br><br></br>
            <label htmlFor="password" className='input-prompt'>PASSWORD</label><br></br>
            <input
              id="password"
              className="input"
              type="password"
              onChange={handleChange}
              value={formState.password}
              />
          </form>
          </div>
        <div className="form-footer">
          <Link to="/AdminVenues">
            <button className="primary-button">Login</button>
          </Link>
              </div>
              </div>
        </div>
    </div>
  );
}

export default Login;
