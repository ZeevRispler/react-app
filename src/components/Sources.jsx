import { useState } from 'react';
import React from 'react';
import "./Sources.css";

const Sources = (props) => {
    const sources = props.source;
    return (
        <div className='comp-sources'>
            <details className='inner-bubble'>
                <summary>
                    Sources:
                </summary>
                {sources.map((source) => (
                    <div className='source'>
                        <img height="16" width="16" src={"https://icons.duckduckgo.com/ip3/" + new URL(source.source).hostname + ".ico"} />
                        <a href={source.source} target="_blank">{source.title}</a>
                    </div>
                ))}
            </details>
        </div>
    )
};

export default Sources;