import { useState } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import History from './History';
import "./Leftbar.css";

const Leftbar = (props) => {
    return (
        <div className='comp-leftbar'>
            <Header />
            <div className="inner">
                <Search />
                <History summary="Last 30 days" history={["Trying to Help with Something", "A Question about Timing", "Drink More Water", "Trying to Help with Something", "A Question about Timing"]} />
                <History summary="January 2024" history={["Drink More Water", "Trying to Help with Something", "A Question about Timing", "Drink More Water", "Trying to Help with Something", "A Question about Timing", "Drink More Water"]} />
                <History summary="December 2023" history={["Trying to Help with Something", "A Question about Timing", "Drink More Water", "Trying to Help with Something", "A Question about Timing"]} />
            </div>
            <Footer />
        </div>
    )
};

export default Leftbar;