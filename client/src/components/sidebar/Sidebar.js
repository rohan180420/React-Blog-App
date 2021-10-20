import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebar__img" src="https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg" alt="" />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            <li className="sidebarListItem"> Life</li>
            <li className="sidebarListItem"> Music</li>
            <li className="sidebarListItem"> Style</li>
            <li className="sidebarListItem"> Sport</li>
            <li className="sidebarListItem"> Tech</li>
            <li className="sidebarListItem"> Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}

export default Sidebar;
