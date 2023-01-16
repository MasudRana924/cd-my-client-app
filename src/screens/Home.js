import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Sidebar from './Sidebar';

const Home = () => {
    return (
        
        <div className="desktop-one">
            <div className="left-container">
                <Sidebar></Sidebar>
            </div>

            <div className="right-container">
                <div className="header-section">
                    <div className="search-section">
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="profile-section">

                    </div>

                </div>
                <div className="main-content">

                    <div className="main-content-header">
                        <h2>Overview </h2>
                        <div className="main-content-right">
                            <button className="over-view-btn">Overview</button>

                            <button className="clapLink-btn">Create a ClapLink</button>
                        </div>
                    </div>
                    <div className="main-content-section">
                        <h2>Start Creating links to see the analytics here</h2>
                        <Link to="/createlink" ><button className="first-link-btn">Create Your First Link</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;