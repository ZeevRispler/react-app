import { useState } from 'react';
import React from 'react';
import "./Sources.css";

const Sources = (props) => {
    const contents = props.content;
    return (
        <div className='comp-sources'>
            <details className='inner-bubble'>
                <summary>
                    Sources:
                </summary>
                {contents.map((content) => (
                        <div><a href={content} target="_blank">{content}</a></div>
                    ))}
            </details>
            <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div>
        </div>
    )
};

export default Sources;