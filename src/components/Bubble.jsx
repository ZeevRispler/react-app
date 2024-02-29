import { useState } from 'react';
import React from 'react';
import "./Bubble.css";
import IconBot from "./IconBot";
import IconHuman from "./IconHuman";
import Sources from "./Sources";

const Bubble = (props) => {
    return (
        <div className={'comp-bubble ' + props.bot}>
            {props.bot
                ? <IconBot />
                : <IconHuman />
            }
            <div className="flex-column">
                <div className='inner-bubble'>{props.content}</div>
                {props.bot ? <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div> : <div className='help-text'></div>}

                {props.source ? <Sources source={props.source} /> : <div></div>}
            </div>


            <button className='copy-icon' onClick={() => {
                navigator.clipboard.writeText(props.content);
            }}></button>

            {/* TODO: Add 'suggest' icon, to open popup w alternative text input */}
            {/* TODO: Sources is irrelevant, make bubble hold all kinds of data */}
        </div>
    )
};

export default Bubble;