import { useState } from 'react';
import React from 'react';
import "./Rightbar.css";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Textarea from './Textarea';

const Rightbar = (props) => {
    return (
        <div className='comp-rightbar'>
            <div className='title'>Properties</div>
            <Paragraph header="Paragraph component" content="Bibendum vehicula aenean parturient blandit aliquam. Amet ipsum turpis integer gravida pulvinar aenean dictumst faucibus." />
            <Input header="Input component" content="Please type name" placetext="Placeholder only" />
            <Textarea header="Textarea component" content="Please type name" placetext="Placeholder only" />
        </div>
    )
};

export default Rightbar;