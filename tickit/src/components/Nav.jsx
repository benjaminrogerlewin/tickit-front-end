import { Link } from 'react-router-dom'

import Events from './Events'
import Login from './Login'
import SignUp from './SignUp'

export default function Nav(){

return(
    <div id="navbar">
        <h1> tickit </h1>
        <div id="links">
            <Link to="/Events" element={<Events/>}><button>Events</button></Link>
            <Link to="/Login" element={<Login/>}><button>Login</button></Link>
            <Link to="/SignUp" element={<SignUp/>}><button>Sign up</button></Link>
        </div>
    </div>
)}
