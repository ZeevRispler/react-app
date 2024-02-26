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
            <Bubble content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sequi quis cupiditate voluptas soluta fugit iste iure. Exercitationem magnam beatae adipisci perferendis." bot />
            <Bubble content="Hello, Can I get some help?" />
            <Bubble content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sequi quis cupiditate voluptas soluta fugit iste iure." bot />
            <Sources link={["https://en.wikipedia.org/wiki/TikTok", "https://www.tiktok.com/@lugidesign", "https://medium.com/data-science-at-microsoft/how-large-language-models-work-91c362f5b78f"]} />
            
            <Message />
        </div>
    )
};

export default Chat;