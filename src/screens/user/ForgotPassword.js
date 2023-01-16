import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPass.css'

const ForgotPassword = () => {
    return (
        <div className="forgot-pass-section">
        <div className="forgot-container">
            <h2>Forgot password?</h2>
            <p>No worries, we’ll send you reset instructions.</p>

            <h3>Email</h3>
            <input type="text" placeholder='Enter Your Email'/>
            
            <button className="reset-btn">Reset Password</button>

           
            <p className="back-text "> Back to log in</p> 
        </div>

    </div>
    );
};

export default ForgotPassword;