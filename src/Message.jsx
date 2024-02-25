import { useState } from 'react';
import React from 'react';
import "./Message.css";

const Message = (props) => {
    return (
        <div className='comp-message'>
            <div className="input">
                <input type='text' placeholder='Send message...' />
            </div>
        </div>
    )
};

export default Message;