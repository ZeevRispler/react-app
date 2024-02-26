import { useState } from 'react';
import React from 'react';
import "./Chat.css";
import Bubble from "./Bubble";
import Sources from "./Sources";
import Message from "./Message";

const Chat = (props) => {
    return (
        <div className='comp-chat'>
            <Bubble content="Hello, Can I get some help?" />
            <Bubble content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sequi quis cupiditate voluptas soluta fugit iste iure. Exercitationem magnam beatae adipisci perferendis? Explicabo modi, expedita similique non tempore libero illum." bot />
            <Bubble content="Hello, Can I get some help?" />
            <Bubble content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sequi quis cupiditate voluptas soluta fugit iste iure." bot />
            <Sources content="Sources?" />
            
            <Message />
        </div>
    )
};

export default Chat;