import React from 'react';
import { Link } from 'react-router-dom';
import'./Login.css'

const Login = () => {
    return (
        <div className="login-section">
            <div className="login-form-section">
                <div className="login-form">
                    <div className="top-form">
                        <p>Untitled UI</p>
                    </div>
                    <h2>Login</h2>
                    <p>Welcome back! Please enter your details.</p>
                    <form action="" className="form-section">

                        <p>Email*</p>
                        <input type="text" placeholder='Enter Your Email' />

                        <p>Password *</p>
                        <input type="password" placeholder='Enter Your Password' />

                        <div className="forgot-section">
                            <span className="remember-text">Rememder for 90 days</span>
                            <span className="forgot-text">Forgot password</span>
                        </div>
                        <button className="get-btn">Signin</button>
                        <span className="form-footer-text">Don't have an account? <Link to="/signup" className="login-text ">Signup</Link></span>

                    </form>

                </div>
                {/* <div className="login-footer">
                    <p>© Untitled UI 2077</p>
                    <p>help@untitledui.com</p>
                </div> */}
            </div>

        </div>
    );
};

export default Login;