import { useState } from 'react';
import React from 'react';
import "./History.css";

const History = (props) => {
    const histories = props.history;
    return (
        <div className='comp-history'>
            <details>
                <summary>{props.summary}</summary>
                {histories.map((history) => (
                    <button>{history}</button>
                ))}
            </details>
        </div>
    )
};

export default History;