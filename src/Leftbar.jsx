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
                <History summary="Today" history={["Trying to Help with Something", "A Question about Timing", "Drink More Water", "Trying to Help with Something", "A Question about Timing"]} />
                <History summary="January 2024" history={["Drink More Water", "Trying to Help with Something", "A Question about Timing", "Drink More Water", "Trying to Help with Something", "A Question about Timing", "Drink More Water"]} />
                <History summary="December 2023" history={["Trying to Help with Something", "A Question about Timing", "Drink More Water", "Trying to Help with Something", "A Question about Timing"]} />
                {/* TODO: Remove grouping for now. array should include topic + ID */}
                {/* TODO: Footer is stupid, make button here, so it will be more dynamic */}
            </div>
            <Footer />
        </div>
    )
};

export default Leftbar;