import { useState } from 'react';
import React from 'react';
import "./Chat.css";
import Bubble from "./Bubble";

const Chat = (props) => {
    return (
        <div className='comp-chat'>
            <div className='title'>Chat</div>
            <Bubble content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sequi quis cupiditate voluptas soluta fugit iste iure. Exercitationem magnam beatae adipisci perferendis? Explicabo modi, expedita similique non tempore libero illum." />
        </div>
    )
};

export default Chat;