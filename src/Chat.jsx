import { useEffect, useState } from 'react';
import React from 'react';
import "./Chat.css";
import Bubble from "./components/Bubble";
import Message from "./components/Message";
import Search from "./components/Search";
import Button from "./components/Button";
import MockClient from './Mock'

const Chat = (props) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const chatSession = await MockClient.getSession();
            setMessages(chatSession.history);
        }
        fetchData();
    }, []);

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

            <div className="chat-flex">
                <div className="bubbles-flex">
                    {messages.map((chatHistory) => (
                        <Bubble content={chatHistory.content} bot={chatHistory.role} source={chatHistory.sources} />
                    ))}
                </div>

                <Message setter={setMessages} />
            </div>
        </div>
    )
};

export default Chat;