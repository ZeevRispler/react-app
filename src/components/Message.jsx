import { useState } from 'react';
import React from 'react';
import "./Message.css";
import Button from "./Button"

const Message = (props) => {
    return (
        <div className='comp-message'>
            <div className="input">
            <div className="icon-button plus-icon"></div>
                <input type='text' placeholder='Send message...' />
                <div className="icon-button mic-icon"></div>
                <Button label="Send" />
            </div>
        </div>
    )
};

export default Message;