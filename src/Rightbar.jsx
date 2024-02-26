import { useState } from 'react';
import React from 'react';
import "./Rightbar.css";
import Paragraph from "./Paragraph";
import Input from "./Input";

const Rightbar = (props) => {
    return (
        <div className='comp-rightbar'>
            <div className='title'>Properties</div>
            <Paragraph header="Title" content="Bibendum vehicula aenean parturient blandit aliquam. Amet ipsum turpis integer gravida pulvinar aenean dictumst faucibus." />
            <Input header="Title" content="Please type name" placetext="Placeholder only" />
        </div>
    )
};

export default Rightbar;