import { useState } from 'react';
import React from 'react';
import "./History.css";

const History = (props) => {
    const histories = props.history;
    return (
        <div className='comp-history'>
            <details open>
                <summary>{props.summary}</summary>
                <div className="inner-flex">
                    {histories.map((history) => (
                        <button>{history}</button>
                    ))}
                </div>
            </details>
        </div>
    )
};

export default History;