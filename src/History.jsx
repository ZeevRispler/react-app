import { useState } from 'react';
import React from 'react';
// import "./History.css";

const History = (props) => {
    const histories = props.history;
    return (
        <div className='comp-history'>
            {histories.map((history) => (
                    <button>{history}</button>
                ))}
        </div>
    )
};

export default History;