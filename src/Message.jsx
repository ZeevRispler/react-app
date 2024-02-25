import { useState } from 'react';
import React from 'react';
import "./Message.css";
import Button from "./Button"

const Message = (props) => {
    return (
        <div className='comp-message'>
            <div className="input">
                <input type='text' placeholder='Send message...' />
                <Button label="Send" />
            </div>
        </div>
    )
};

export default Message;