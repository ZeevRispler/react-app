import { useState } from 'react';
import React from 'react';
import "./Bubble.css";

const Bubble = (props) => {
    return (
        <div className={'comp-bubble ' + props.bot}>
            {props.bot
                ? <button>BOT</button>
                : <button>NO</button>
            }
            <p>{props.content}</p>
        </div>
    )
};

export default Bubble;