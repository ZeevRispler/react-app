import { useState } from 'react';
import React from 'react';
import "./Textarea.css";

const Textarea = (props) => {
    return (
        <div className='comp-textarea'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <div className="textarea-div">
                <textarea type="text" placeholder={props.placetext} res />
            </div>
        </div>
    )
};

export default Textarea;