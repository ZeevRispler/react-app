import { useState } from 'react';
import React from 'react';
import "./Dropdown.css";

const Dropdown = (props) => {
    return (
        <div className='comp-dropdown'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <input type="text" />
        </div>
    )
};

export default Dropdown;