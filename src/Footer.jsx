import { useState } from 'react';
import React from 'react';
import "./Footer.css";
import Button from "./Button";

const Footer = (props) => {
    return (
        <div className='comp-footer'>
            <Button label="New chat"/>
        </div>
    )
};

export default Footer;