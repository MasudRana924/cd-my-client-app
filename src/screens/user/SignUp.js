import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className="signup-section">
            <div className="signup-form-section">
                <div className="signup-form">
                    <div className="top-form">
                        <p>Untitled UI</p>
                    </div>
                    <h2>Sign up</h2>
                    <form action="" className="form-section">

                        <p>Name*</p>
                        <input type="text" placeholder='Enter Your Name' />

                        <p>Email*</p>
                        <input type="text" placeholder='Enter Your Email' />

                        <p>Password *</p>
                        <input type="password" placeholder='Enter Your Password' />

                        <p>Must be at least 8 characters.</p>
                        <button className="get-btn">Get started</button>
                        <span className="form-footer-text">Don't have an account? <Link to="/login" className="login-text ">Login</Link></span>
                    </form>

                </div>
                <div className="signup-footer">
                    <p>© Untitled UI 2077</p>
                    <p>help@untitledui.com</p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;