import React from 'react';
import './PassReset.css'

const PassReset = () => {
    return (
        <div className="reset-pass-section">
        <div className="reset-container">
            <h2>Password reset</h2>
            <p>Your password has been successfully reset. Click below to log in magically.</p>

            <button className="reset-btn">Continue</button>
         
            <p className="back-text "> Back to log in</p>
           
        </div>

    </div>
    );
};

export default PassReset;