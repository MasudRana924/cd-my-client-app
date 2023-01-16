import React from 'react';
import { Link } from 'react-router-dom';
import './NewCreateLink.css'
import Sidebar from './Sidebar';
import imgUser from '../images/icons8-user-100.png'

const NewCreateLink = () => {
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
                    <div className="create-content-header">
                        <h2>Create your Clap Link</h2>
                        <div className="main-content-right ">
                            <button id="over-view-btn">Overview</button>

                            <button id="clapLink-btn">Create a ClapLink</button>
                        </div>
                    </div>
                    <div className="desktop-one-main-container">


                        <div className="desktop-1">
                            <div className="title-section">
                                <h2>Enter your Title</h2>
                                <input type="text" />
                            </div>
                            <div className="sub-title-section">
                                <h2>Enter your SubTitle</h2>
                                <input type="text" placeholder='Click the button below to subscribe to my channel and again come here to get your link ' />
                            </div>
                            <div className="custom-link-section">
                                <h2>Customize your link</h2>
                                <div className="input-btn">
                                    <input type="text" placeholder='' />
                                    <button className="affliate-btn">Affiliate Link</button>
                                </div>
                                <p>You can use the generated link or create custom one</p>
                            </div>

                            <div className="loact-action-section">
                                <h2>Add lock Action (s)</h2>
                                <p>Select the actions you need to add . The user need to complete the action to get the main link.</p>
                                <div className="custom-action-section">
                                    <button className="custom-btn">Create a Custom Action +</button>
                                </div>
                                <div className="btn-container">
                                    <div className="btn-section">
                                        <button className="utube-subs-btn">Youtube Subscribe +</button>
                                        <button className="like-video-btn">Like a video + </button>
                                    </div>
                                    <div className="btn-section">
                                        <button className="comment-btn">Comment on a video +</button>
                                        <button className="watch-btn">watch a playlist + </button>
                                    </div>

                                </div>
                                <div className="dis-tel-section">

                                    <button className="discord-btn">Join Discord Server +</button>
                                    <button className="tele-btn">Join Telegram Channel + </button>

                                </div>
                                <div className="visit-blog-section">

                                    <button className="visit-btn">Visit My Blog +</button>
                                    <button className="visit-web-btn">Visit My websitr + </button>

                                </div>
                                <button className="see-more-btn">See 13 more actions</button>

                            </div>
                            <div className="reward-link-action">
                                <h2>Enter your Reward Link</h2>
                                <input type="text" placeholder='https://dropbox.com/thisisthemainfilelink/' />
                            </div>
                            <div className="create-preview-section">
                                <button className="create-link-button">Create Your Link </button>
                                <button className="preview-btn">Preview</button>
                            </div>

                        </div>
                        <div className="desktop-1-right">
                            <div className="content-section">
                                <img src={imgUser} alt="" className="img-user" />
                                <div className="context-section">

                                    <h2>Your Support is Highly appreacted for me!</h2>
                                    <p>Click the button below to support my contents, so I can get the dose to make more for you!</p>
                                    <button className="add-lock-btn">Add Lock Actions for preview</button>
                                    <button className="get-link">Get Your Link</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewCreateLink;