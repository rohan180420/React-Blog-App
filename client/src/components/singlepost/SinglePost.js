import React from 'react';
import "./SinglePost.css";

function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className="singlePostTitle">"Lorem ipsum dolor sit amet "
            <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
            <span className="singlePostAuthor">Auhtor: <b>Ron</b></span>
            <span className="singlePostDate"> 1 hour ago</span>
            </div>
            <p className="singlePostDesc">"Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing  
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default singlePost;
