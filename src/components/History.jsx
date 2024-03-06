import { useState } from 'react';
import React from 'react';
import "./History.css";

const History = (props) => {
    const histories = props.history;
    return (
        <div className='comp-history'>

            <div className="inner-flex">
                {histories.map((history) => (
                    <button>
                        {history.topic}
                        <div className="icon-button"></div>
                    </button>

                    // TODO: Login icon should open a menu (like in Figma)
                    // TODO: Add elipsis icon for menu with 'Delete', 'Archive', 'Export-to-PDF'
                ))}
            </div>
        </div>
    )
};

export default History;