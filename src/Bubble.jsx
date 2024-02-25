import { useState } from 'react';
import React from 'react';
import "./Bubble.css";

const Bubble = (props) => {
    return (
        <div className='comp-bubble'>
            <p>{props.content}</p>
        </div>
    )
};

export default Bubble;