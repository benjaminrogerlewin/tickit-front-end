import '../Modal.css';
import React, { useRef, useState } from 'react';

import SignUp from './SignUp'


function Login({setOpenLogin}) {

    const userRef = useRef();

    const [registerOpen, setRegisterOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalState, setModalState] = useState("block");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser("");
        setPassword("");
        setIsLoggedIn(true);
      };

    return (
        <div className="modal-background">
            <section className="modal-container">
                <div className="modal-header">
                    <button 
                        className="close-modal"
                        onClick={() => {setOpenLogin(false);}}
                        >
                        &times;
                    </button>
                    <h1 className="modal-title">LOGIN</h1>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                    <input
                        id="username"
                        type="text"
                        placeholder="username"
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    ></input>
        
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </form>
                </div>
                <div className="modal-footer">
                    <button
                        type="submit"
                    >
                        LOGIN
                        </button>
                    <button 
                    className="primary-button" 
                    onClick={() => {
                        setLoginOpen(false);
                        setRegisterOpen(true);
                    }}
                >
                    REGISTER
                </button>
                </div>

            </section>
            {/* {loginOpen && <Login setOpenLogin={setLoginOpen} />} */}
            {registerOpen && <SignUp setOpenRegister={setRegisterOpen} />}


        </div>
  );
}

export default Login;

