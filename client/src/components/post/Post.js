import React from 'react';
import "./Post.css";

function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://media.istockphoto.com/photos/flowers-on-the-shore-of-lake-geneva-picture-id1280003274?b=1&k=20&m=1280003274&s=170667a&w=0&h=bFSswo40EQIa6Ohj7iyXSXbo4Fh2Ud3fxGnFfzUsLqU="/>
            <div className="postInfo">
            <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            "Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">"Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
    )
}

export default Post;
