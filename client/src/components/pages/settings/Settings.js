import React from 'react';
import "./Settings.css";
import Sidebar from '../../sidebar/Sidebar';

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
            <img 
            src="https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg"
            alt=""/>
            <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input className="input__settings" type="text" placeholder="Ron" />
            <label>Email</label>
            <input className="input__settings" type="email" placeholder="parmarrohan.13@gmail.com" />
            <label>Password</label>
            <input className="input__settings" type="password" />
            <button className="settingsSubmit">Update</button>
            </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings;
