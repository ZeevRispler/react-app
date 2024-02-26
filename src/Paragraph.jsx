import { useState } from 'react';
import React from 'react';
import "./Paragraph.css";

const Paragraph = (props) => {
    return (
        <div className='comp-paragraph'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>

        </div>
    )
};

export default Paragraph;