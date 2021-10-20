import React from 'react';
import { Link } from 'react-router-dom';
import "./TopBar.css";

function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
            <li className="TopListItem">
            <Link className="link" to="/">HOME</Link>
            </li>
            <li className="TopListItem">
            <Link className="link" to="/">ABOUT</Link>
            </li>
            <li className="TopListItem">
            <Link className="link" to="/">CONTACT</Link>
            </li>
            <li className="TopListItem">
            <Link className="link" to="/write">WRITE</Link>
            </li>
            <li className="TopListItem">
            {user && "LOGOUT"}
            </li>
            </ul>
            </div>
            <div className="topRight">
            {
                user ? (
                    <img className="topImg" src="https://i.pinimg.com/originals/ef/2d/9d/ef2d9daca0f54589ed4ebc0a2d5eb2e4.jpg" alt="" />
                ) : (
                    <ul className="topList">
                    <li className="TopListItem">
                    <Link className="link" to="/login">
                    LOGIN 
                    </Link>
                    </li>
                    <li className="TopListItem">
                    <Link className="link" to="/register">
                    REGISTER
                    </Link>
                    </li>
                    </ul>
                )
            }
    
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar;
