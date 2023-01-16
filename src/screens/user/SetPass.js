import React from 'react';
import './Setpass.css'

const SetPass = () => {
    return (
        <div className="set-pass-section">
            <div className="set-pass-container">
                <h2>Set new password</h2>
                <p>Your new password must be different to previously used passwords.</p>


                <form action="" className="set-pass-form">
                    <p>Password</p>
                    <input type="pass" placeholder='' />
                   
                    <h6 className="pass-length">Must be at least 8 characters.</h6>
                    <p>Password</p>
                    <input type="pass" placeholder='' />
                    <button className="reset-btn">Reset Password</button>
                </form>

                <p className="back-text "> Back to log in</p>
            </div>

        </div>
    );
};

export default SetPass;