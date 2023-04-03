import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div id="navbar">
            <h1> tickit </h1>
            <div id="links">
                <Link to="/"><button>Home</button></Link>
                <Link to="/Events"><button>Events</button></Link>
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/SignUp"><button>Sign up</button></Link>
                <Link to="/cart"><button>My Cart</button></Link>
            </div>
        </div>
    )
}

export default Nav
