import React from 'react';
import { Link } from 'react-router-dom';

const CheckEmail = () => {
    return (
        <div className="email-verify-section">
            <div className="email-verify">
                <h2>Check your email</h2>
                <p>We sent a verification link to olivia@untitledui.com</p>
                <div className="verify-code">
                    <input type="text" placeholder='3' />
                    <input type="text" placeholder='0' />
                    <input type="text" placeholder='6' />
                    <input type="text" placeholder='6' />
                </div>
                <button className="enterCode-btn">Verify Email</button>

                <span className="recieve-email-text">Didn’t receive the email? <Link to="/login" className="resend-text ">Click to resend</Link></span>
                <br />
                <p className="back-text "> Back to log in</p>
            </div>

        </div>
    );
};

export default CheckEmail;