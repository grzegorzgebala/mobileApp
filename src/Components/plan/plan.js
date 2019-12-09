import React from 'react';
import './plan.css';
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import Navbar from 'Components/common/navbar/navbar';

function Plan() {
    return (
        <div>
            <StatusBar className="status" />
            <Navbar />
            <div className="siteTitle">Plan Your Visit</div>
            <div className="narrow">
                <p className="planTitle">Skip The Line.</p>
                <p className="planTitle">Purchase Tickets</p>
                <p className="titleDesc">All exhibitions, audio tours, and films included in the price of admission.</p>
            </div>
            <div className="days">
                <div className="day">Today</div>
                <div className="day">Tomorrow</div>
                <div className="day">Other</div>
            </div>
            <div className="information">
                <div>March 22, 2016</div>
                <div>Open 10:30am-5:30pm</div>
            </div>
            <div className="row row-first">
                <div className="persons">Adults</div>
                <div className="sum">
                    <div className="sign">-</div>
                    <div className="number">2</div>
                    <div className="sign">+</div>
                </div>
            </div>
            <div className="row">
                <div className="persons">
                    <p>Seniors</p>
                    <p className="age">65+ with ID</p>
                </div>
                <div className="sum">
                    <div className="sign">-</div>
                    <div className="number">0</div>
                    <div className="sign">+</div>
                </div>
            </div>
            <div className="row row-last">
                <div className="persons">
                    <p>Students</p>
                    <p className="age">with ID</p>
                </div>
                <div className="sum">
                    <div className="sign">-</div>
                    <div className="number">0</div>
                    <div className="sign">+</div>
                </div>
            </div>
            <div className="planTotal">
                <div>Total</div>
                <div>$16</div>
            </div>
            <div className="button">
                <button type="buttonLogIn">Continue to payment</button>
            </div>
        </div>
    );
}

export default Plan;