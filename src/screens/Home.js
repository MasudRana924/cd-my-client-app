import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="desktop-1">
            <div className="title-section">
                <h2>Enter your Title</h2>
                <input type="text" />
            </div>
            <div className="sub-title-section">
                <h2>Enter your SubTitle</h2>
                <input type="text" placeholder='' />
            </div>
            <div className="loact-action-section">
            <h2>Enter your SubTitle</h2>
                <input type="text" placeholder='' />
            </div>
           
        </div>
    );
};

export default Home;