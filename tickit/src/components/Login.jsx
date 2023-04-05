// import "../Modal.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

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
        {/* <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHw%3D&w=1000&q=80"></img> */}
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
          <button className="primary-button" style={{ marginRight: "20px" }}>
            Login
          </button>
              </div>
              </div>
        </div>
    </div>
  );
}

export default Login;
