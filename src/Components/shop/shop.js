import React from 'react';
import './shop.css';
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import Navbar from 'Components/common/navbar/navbar';
import { ReactComponent as ShopImage } from "Background/5_shop/shopImage.svg";
import { ReactComponent as ShopCarousele } from "Background/5_shop/shopCarousele.svg";
import { ReactComponent as Vector } from "Background/5_shop/vector.svg";

function Shop() {
    return (
        <div>
            <StatusBar className="status" />
            <Navbar />
            <div className="siteTitle">Shop</div>
            <div className="shopImage">
                <ShopImage />
            </div>
            <ShopCarousele className="shopCarousele"/>
            <div className="shopTitle">Braun Classic Watch</div>
            <div className="shopDescArea">
                <p className="shopDesc">
                    This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, 
                    both of whom have work featured in the Museum’s collection. The large watch features a numbered face, 
                    and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, 
                    a three-hand quartz movement, and a leather band. Water-resistant.
                </p>
                <div className="vector">
                    <Vector />
                </div>
            </div>
            <div className="validator">
                <div className="prices">
                    <div className="priceTop">$160.00</div>
                    <div className="priceBottom">$140.00 Member Price</div>
                </div>
                <div className="sum">
                    <div className="sign">-</div>
                    <div className="number">0</div>
                    <div className="sign">+</div>
                </div>
            </div>
            <div className="button">
                <button type="buttonLogIn">Add to Cart</button>
            </div>
        </div>
    );
}

export default Shop;