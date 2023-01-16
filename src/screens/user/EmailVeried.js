import React from 'react';
import { Link } from 'react-router-dom';

const EmailVeried = () => {
    return (
        <div className="email-verify-section">
        <div className="email-verify">
            <h2>Email verified</h2>
            <p>Your password has been successfully reset. Click below to log in magically.</p>
            
            <button className="enterCode-btn">Continue</button>

            <span className="recieve-email-text">Didn’t receive the email? <Link to="/login" className="resend-text ">Click to resend</Link></span>
            <br />
            <p className="back-text "> Back to log in</p>
        </div>

    </div>
    );
};

export default EmailVeried;