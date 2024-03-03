import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
// import Search from './Search';
import History from './components/History';
import Button from './components/Button';
import "./Leftbar.css";

const Leftbar = (props) => {
    return (
        <div className='comp-leftbar'>
            <Header />
            <div className="inner">
                {/* <Search /> */}
                <History history={[{ topic: "Trying to Help with Something", id: 0 }, { topic: "A Question about Timing", id: 1 }, { topic: "Drink More Water", id: 2 }, { topic: "Trying to Help with Something", id: 3 }, { topic: "A Question about Timing", id: 4 }, { topic: "Trying to Help with Something", id: 5 }, { topic: "A Question about Timing", id: 6 }, { topic: "Drink More Water", id: 2 }, { topic: "Trying to Help with Something", id: 7 }, { topic: "A Question about Timing", id: 8 }, { topic: "Trying to Help with Something", id: 0 }, { topic: "A Question about Timing", id: 9 }, { topic: "Drink More Water", id: 10 }, { topic: "Trying to Help with Something", id: 11 }, { topic: "A Question about Timing", id: 12 }]} />
            </div>
            <div class="footer-flex">
                <Button label="New chat" />
            </div>
        </div>
    )
};

export default Leftbar;