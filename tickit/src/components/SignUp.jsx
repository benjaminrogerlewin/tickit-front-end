import React, { useState } from 'react';


function SignUp() {

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

          <div className="form-img"  id="signup-img">
          </div>
          
          <div className="form-body">
            <div className="form-content">
              <p className='form-title'>Register</p>
              <div className='form'>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username" className='input-prompt'>USERNAME</label><br></br>
                  <input
                    id="username"
                    className="input"
                    type="text"
                    onChange={handleChange}
                    value={formState.username}
                    /><br></br><br></br>
                  <label htmlFor="email" className='input-prompt'>EMAIL</label><br></br>
                  <input
                    id="email"
                    className="input"
                    type="text"
                    onChange={handleChange}
                    value={formState.email}
                    /><br></br><br></br>
                  <label htmlFor="password" className='input-prompt'>PASSWORD</label><br></br>
                  <input
                    id="password"
                    className="input"
                    type="password"
                    onChange={handleChange}
                    value={formState.password}
                    /><br></br><br></br>
                  <label htmlFor="password" className='input-prompt'>CONFIRM PASSWORD</label><br></br>
                  <input
                    id="password"
                    className="input"
                    type="password"
                    onChange={handleChange}
                    value={formState.password}
                  /><br></br>
              </form>
            </div>
            <div className="form-footer">
            <button className="primary-button" style={{ marginRight: "20px" }}>
            Sign Up
          </button>
                          </div>
                </div>
            </div>
        </div>
  );
}

export default SignUp;


