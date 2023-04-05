import '../Modal.css';
import React, { useState } from 'react';


function SignUp({setOpenRegister}) {

    return (
        <div className="modal-background">
            <section className="modal-container">
                <button 
                    className="close-modal"
                    onClick={() => {setOpenRegister(false);}}
                    >
                    &times;
                </button>
                <div className="modal-title">
                    <h1>REGISTER</h1>
                </div>
                <div className="modal-body">
                    <p> FORM CONTENT GOES HERE </p>
                </div>
                <div className="modal-footer">
                    <button>REGISTER</button>
                </div>

            </section>
        </div>
  );
}

export default SignUp;


