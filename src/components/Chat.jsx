import { useState } from 'react';
import React from 'react';
import "./Chat.css";
import Bubble from "./Bubble";
import Sources from "./Sources";
import Message from "./Message";
import Search from "./Search";
import Button from "./Button";
import Data from './../assets/aa.json';

const Chat = (props) => {
    const chatHistories = Data.history;
    return (
        <div className='comp-chat'>
            <details className="mobile-menu">
                <summary>
                    <div className="icon-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </summary>
                <div className="inner-menu">
                    <Search />
                    <Button label="History" />
                    <Button label="Properties" />
                    <Button label="New Chat" />
                </div>
            </details>

            {chatHistories.map((chatHistory) => (
                <Bubble content={chatHistory.content} bot={chatHistory.role} source={chatHistory.sources} />
            ))}

            <Message />
        </div>
    )
};

export default Chat;