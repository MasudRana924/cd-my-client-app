import React from 'react';
import { Link } from 'react-router-dom';
import './VerifyEmail.css'

const VeriFyEmail = () => {
    return (
        
            <div className="email-verify-section">
                <div className="email-verify">
                   <h2>Check your email</h2>
                   <p>We sent a verification link to olivia@untitledui.com</p>
                   <button className="enterCode-btn">Enter code manually</button>
                   <span className="back-text"> Back to log in</span>
                </div>

            </div>

        
    );
};

export default VeriFyEmail;