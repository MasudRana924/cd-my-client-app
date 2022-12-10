import React from 'react';
import './Sidebar.css'
import logo from '../images/icons8-user-80.png'


const Sidebar = () => {
    return (
        <div className="sidebar-section">

            <div className="top-sidebar">
                <div className="logo-title">
                    <img src={logo} alt="" className="logo-img" />
                    <h2>Untitled UI</h2>

                </div>

                <div className="menu-section">
                    <button className="btn-dashboard">Dashboard</button>
                    <button className="sick-link-btn">Sick Link</button>
                    <button className="btn-dashboard">Group</button>
                    <button className="btn-dashboard">Short Link</button>
                    <button className="btn-dashboard">Membership</button>
                </div>

            </div>
            <div className="sidebar-bottom">
                      <div className="used-space-section">
                           <div className="desc-section">
                              <div className="dsec-title-section">
                                   <h3 className="space-title">Used space</h3>
                                   <button className="close-x">X</button>
                              </div>
                              <p>Your team has used 80% of your available space. Need more?</p>
                           </div>

                      </div>
                    <button className="clap-link-btn">Create a ClapLink</button>
                    <button className="short-link-btn">Create a Short Link</button>
                   
            </div>

        </div>
    );
};

export default Sidebar;