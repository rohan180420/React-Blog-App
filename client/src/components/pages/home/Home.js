import React from 'react';
import Header from '../../header/Header';
import Sidebar from '../../sidebar/Sidebar';
import Posts from '../../posts/Posts';
import "./Home.css";

function Home() {
    return (
        <div>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
        
        </div>
        </div>
    )
}

export default Home;
