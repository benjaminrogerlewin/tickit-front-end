import '../Modal.css';
import React, { useState } from 'react';

import SignUp from './SignUp'


function Login({setOpenLogin}) {

    const [registerOpen, setRegisterOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

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
                    <p> FORM CONTENT GOES HERE </p>
                </div>
                <div className="modal-footer">
                    <button>LOGIN</button>
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


