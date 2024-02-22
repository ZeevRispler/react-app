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
                <History summary="Last 30 days" history={["Trying to Help with Something", "A Question about Timing", "Drink More Water"]} />
            </div>
            <Footer />
        </div>
    )
};

export default Leftbar;