import { useState } from 'react';
import React from 'react';
import "./Dropdown.css";

const Dropdown = (props) => {
    const options = props.option;
    return (
        <div className='comp-dropdown'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <select>
                {options.map((option) => (
                    <option>{option}</option>
                ))}
            </select>
        </div>
    )
};

export default Dropdown;