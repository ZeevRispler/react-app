import { useState } from 'react';
import React from 'react';
import "./Message.css";

const Message = (props) => {
    return (
        <div className='comp-message'>
            <input type='text' placeholder='Send message...' />
        </div>
    )
};

export default Message;