import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Nav = () => {
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
          <button className="primary-button">Sign up</button>
        </Link>
        {/* <Link to="/cart">
          <button>My Cart</button>
        </Link> */}
        <Link to="/admin">
          <button>admin</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
