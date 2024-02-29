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

                {/* TODO: Add 'suggest' icon, to open popup w alternative text input */}
                {/* TODO: Sources is irrelevant, make bubble hold all kinds of data */}
                {/* TODO: SVG should be external */}

            </button>
        </div>
    )
};

export default Bubble;