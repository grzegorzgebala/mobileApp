import React from 'react';
import './home.css';
// import LogIn from './Components/logIn'
import { ReactComponent as HomePicture } from "Background/2_homeSite/homePicture.svg";
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import { ReactComponent as Localisator } from "Background/2_homeSite/localisator.svg";
import { ReactComponent as Clock } from "Background/2_homeSite/clock.svg";
import Navbar from 'Components/common/navbar/navbar';

function Home() {
    return (
        <div className="container">
            <StatusBar className="status" />
            <Navbar />
            <HomePicture className="background" />
            <div className="futuredExhibition">
                <div className="exhibition">EXHIBITION</div>
                <div className="title">MASTERS OLD AND NEW</div>
                <div className="date">APRIL 15 - SEPTEMBER 20</div>
                <div className="where">FLOOR 5</div>
            </div>
            <button>Plan Your Visit</button>
            <div className="statusBar">
                <Localisator />
                <div className="localisatorDesc">151 3rd St San Francisco, CA 94103</div>
                <Clock />
                <div className="localisatorDesc">Open today 10:00am - 5:30pm</div>
            </div>
        </div>
    );
}

export default Home;
