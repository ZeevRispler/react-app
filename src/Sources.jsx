import { useState } from 'react';
import React from 'react';
import "./Sources.css";

const Sources = (props) => {
    return (
        <div className='comp-sources'>
            <div className='inner-bubble'>{props.content}</div>
            <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div>
        </div>
    )
};

export default Sources;