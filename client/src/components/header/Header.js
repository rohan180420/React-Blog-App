import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
            </div>
            <img
            className="headerImg"
            src="https://t3.ftcdn.net/jpg/01/33/17/10/240_F_133171003_2wSh6tOzNYCwM8BLkSkQmGWaRvHxU5rM.jpg"
            alt="" />
        </div>
    )
}

export default Header;
