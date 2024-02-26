import { useState } from 'react';
import React from 'react';
import "./Slider.css";

const Slider = (props) => {
    const [slider, setSlider] = useState(18);
    return (
        <div className='comp-slider'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <input type="range" min={props.min} max={props.max} class="slider" value={slider} onChange={() => setSlider(event.target.value)}></input>
            <div className='tooltip' style={{left:((slider-props.min)*(252/(props.max-props.min)))+"px"}}>{slider}</div>
            <input type="number" className='slider-input' value={slider} onChange={() => setSlider(event.target.value)}/>
        </div>
    )
};

export default Slider;