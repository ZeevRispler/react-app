import { useState } from 'react';
import React from 'react';
import "./Bubble.css";
import IconBot from "./IconBot";
import IconHuman from "./IconHuman";

const Bubble = (props) => {
    return (
        <div className={'comp-bubble ' + props.bot}>
            {props.bot
                ? <IconBot />
                : <IconHuman />
            }
            <div className='inner-bubble'>{props.content}</div>
            {props.bot ? <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div> : <div className='help-text'></div>}

            <button className='copy-icon' onClick={() => {
                    navigator.clipboard.writeText(props.content);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#576A85" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>

                {/* TODO: Add 'suggest' icon, to open popup w alternative text input */}
                {/* TODO: Sources is irrelevant, make bubble hold all kinds of data */}
                {/* TODO: SVG should be external */}

            </button>
        </div>
    )
};

export default Bubble;