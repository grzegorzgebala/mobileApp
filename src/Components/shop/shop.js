import React from 'react';
import './shop.css';
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import Navbar from 'Components/common/navbar/navbar';
// images import
import { ReactComponent as ShopImage } from "Background/5_shop/shopImage.svg";
import { ReactComponent as ShopCarousele } from "Background/5_shop/shopCarousele.svg";
import { ReactComponent as Vector } from "Background/5_shop/vector.svg";
import { ReactComponent as RectangleShop } from "Background/5_shop/rectangleShop.svg";


function Shop() {
    return (
        <div>
            <StatusBar className="status" />
            <Navbar />
            <div className="siteTitle">Shop</div>
            <div className="shopImage">
                <ShopImage />
            </div>
            <ShopCarousele />
            <div className="shopTitle">Braoun Classic Watch</div>
            <div className="shopescription">
                <p className="shopescription">
                    This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, 
                    both of whom have work featured in the Museum’s collection. The large watch features a numbered face, 
                    and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, 
                    a three-hand quartz movement, and a leather band. Water-resistant.
                </p>
                <Vector />
            </div>
            <div className="validator">
                <div className="prices">
                    <div>$160.00</div>
                    <div>$140.00 Member Price</div>
                </div>
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
            <button type="buttonLogIn">Add to Cart</button>
        </div>
    );
}

export default Shop;