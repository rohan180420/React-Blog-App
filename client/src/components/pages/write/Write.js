import React from 'react';
import"./Write.css";

function Write() {
    return (
        <div className="write">
        <img
        className="writeImg" 
        src="https://media.istockphoto.com/photos/woman-hand-writing-on-notebook-with-pencil-at-river-background-picture-id1301757934?k=20&m=1301757934&s=612x612&w=0&h=ghDh4_3MEt-cIeBXgzqx9XPK2SuAzqOBlMm-dKM5Xsg=" 
        alt=""/>
            <form className="writeForm">
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Tile" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
            <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write;
