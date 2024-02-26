import { useState } from 'react';
import React from 'react';
import "./Sources.css";

const Sources = (props) => {
    const links = props.link;
    return (
        <div className='comp-sources'>
            <details className='inner-bubble'>
                <summary>
                    Sources:
                </summary>
                {links.map((link) => (
                    <div className='source'>
                        <img height="16" width="16" src={"https://icons.duckduckgo.com/ip3/" + new URL(link).hostname + ".ico"} />
                        <a href={link} target="_blank">{link}</a>
                    </div>
                ))}
            </details>
            <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div>
        </div>
    )
};

export default Sources;