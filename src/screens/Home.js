import React, { Fragment } from 'react';
import './Home.css'
import Sidebar from './Sidebar';

const Home = () => {
    return (
        // <div className="desktop-1">
        //     <div className="title-section">
        //         <h2>Enter your Title</h2>
        //         <input type="text" />
        //     </div>
        //     <div className="sub-title-section">
        //         <h2>Enter your SubTitle</h2>
        //         <input type="text" placeholder='' />
        //     </div>
        //     <div className="loact-action-section">
        //         <h2>Add lock Action (s)</h2>
        //         <p>Select the actions you need to add . The user need to complete the action to get the main link.</p>
        //         <div className="btn-container">
        //             <div className="btn-section">
        //                 <button className="utube-subs-btn">Youtube Subscribe +</button>
        //                 <button className="like-video-btn">Like a video + </button>
        //             </div>
        //             <div className="btn-section-two">
        //                 <button className="insta-btn">Like a Instagram post +</button>
        //                 <button className="like-video-btn">Like a video + </button>
        //             </div>
        //             <div className="btn-section-three">
        //                 <button className="visit-btn">Visit Website +</button>
        //                 <button className="email-lck-btn">Email Lock + </button>
        //                 <button className="custom-btn">Custom + </button>
        //             </div>
        //         </div>

        //     </div>
        //     <div className="destination-section">
        //         <h2>Enter your Destination Link</h2>
        //         <input type="text" placeholder='https;//dropbox.com/yourfilename/' />
        //     </div>

        //     <div className="create-link-container">
        //         <button className="createyour-Link-btn">Create Your Link +</button>
        //         <button className="previewBtn">Preview +</button>
        //     </div>

        // </div>
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
                        <button className="first-link-btn">Create Your First Link</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;