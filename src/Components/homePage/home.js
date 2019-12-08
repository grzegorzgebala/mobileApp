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
        <div>
            <StatusBar className="status" />
            <Navbar />
            <HomePicture />
            <div className="futuredExhibition">
                <div className="smallDesc">EXHIBITION</div>
                <div className="title">MASTERS OLD AND NEW</div>
                <div className="date">APRIL 15 - SEPTEMBER 20</div>
                <div className="where">FLOOR 5</div>
            </div>
            <div className="buttonBox">
                <button>Plan Your Visit</button>
            </div>
            <div className="statusBar">
                <div className="object">
                    <Localisator />
                    <div className="localisatorDesc">
                        <p>151 3rd St</p> 
                        <p>San Francisco, CA 94103</p>
                    </div>
                </div>
                <div className="object">
                    <Clock />
                    <div className="localisatorDesc">
                        <p>Open today</p> 
                        <p>10:00am - 5:30pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
