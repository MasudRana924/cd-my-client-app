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
                <h2>Add lock Action (s)</h2>
                <p>Select the actions you need to add . The user need to complete the action to get the main link.</p>
                <div className="btn-container">
                    <div className="btn-section">
                        <button className="utube-subs-btn">Youtube Subscribe +</button>
                        <button className="like-video-btn">Like a video + </button>
                    </div>
                    <div className="btn-section-two">
                        <button className="insta-btn">Like a Instagram post +</button>
                        <button className="like-video-btn">Like a video + </button>
                    </div>
                    <div className="btn-section-three">
                        <button className="visit-btn">Visit Website +</button>
                        <button className="email-lck-btn">Email Lock + </button>
                        <button className="custom-btn">Custom + </button>
                    </div>
                </div>

            </div>
            <div className="destination-section">
                <h2>Enter your Destination Link</h2>
                <input type="text" placeholder='https;//dropbox.com/yourfilename/' />
            </div>

            <div className="create-link-container">
                <button className="createyour-Link-btn">Create Your Link +</button>
                <button className="previewBtn">Preview +</button>
            </div>

        </div>
    );
};

export default Home;