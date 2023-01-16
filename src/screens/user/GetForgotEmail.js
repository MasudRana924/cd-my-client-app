import React from 'react';
import { Link } from 'react-router-dom';

const GetForgotEmail = () => {
    return (
        <div className="forgot-pass-section">
        <div className="forgot-container">
            <h2>Check your email</h2>
            <p>No worries, we’ll send you reset instructions.</p>

            <h3>Email</h3>
            <input type="text" placeholder='Enter Your Email'/>
            
            <button className="reset-btn">Open email app</button>
         <br />
            <span className="recieve-email-text ">Didn’t receive the email? <Link to="/login" className="resend-text ">Click to resend</Link></span>
            <br />
            <p className="back-text "> Back to log in</p>
           
        </div>

    </div>
    );
};

export default GetForgotEmail;