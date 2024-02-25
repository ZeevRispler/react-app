import { useState } from 'react';
import React from 'react';
import "./Chat.css";
import Bubble from "./Bubble";

const Chat = (props) => {
    return (
        <div className='comp-chat'>
            <div className='title'>Chat</div>
            <Bubble />
        </div>
    )
};

export default Chat;