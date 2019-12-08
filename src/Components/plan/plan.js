import React from 'react';
import './plan.css';
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import Navbar from 'Components/common/navbar/navbar';
// items
import { ReactComponent as RectangleShop } from "Background/5_shop/rectangleShop.svg";




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
            <div>March 22, 2016</div>
            <div>Open 10:30am-5:30pm</div>
            <div className="row">
                <div className="persons">Adults</div>
                <div className="sum">
                    <div>
                        <RectangleShop className="rectangle" />
                        <div className="sign">-</div>
                    </div>
                    <div>2</div>
                    <div>
                        <RectangleShop className="rectangle" />
                        <div className="sign">+</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="persons">Seniors</div>
                <div>65+ with ID</div>
                <div className="sum">
                    <div>
                        <RectangleShop className="rectangle" />
                        <div className="sign">-</div>
                    </div>
                    <div>0</div>
                    <div>
                        <RectangleShop className="rectangle" />
                        <div className="sign">+</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="persons">Students</div>
                <div>with ID</div>
                <div className="sum">
                    <div>
                        <RectangleShop className="rectangle" />
                        <div className="sign">-</div>
                    </div>
                    <div>0</div>
                    <div>
                        <RectangleShop className="rectangle" />
                        <div className="sign">+</div>
                    </div>
                </div>
            </div>
            <div className="planTotal">
                <div>Total</div>
                <div>$16</div>
            </div>
            <button type="buttonLogIn">Continue to payment</button>
        </div>
    );
}

export default Plan;