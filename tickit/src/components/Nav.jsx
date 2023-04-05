import { Link } from 'react-router-dom'
import React from 'react'
import logo from "../logo.svg";

function Nav () {

    return(
        <div id="navbar">
            <Link to="/">
            <img id="tickit-logo" src={logo} alt="tickit logo" style={{marginRight:'20px'}} />
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
            </div>
        </div>
    );
};

export default Nav

