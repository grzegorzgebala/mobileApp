import React from 'react';
import './navbar.css';
import { ReactComponent as HamburgerMenu } from "Background/0_common/hamburgerMenu.svg";
// import icons for menu
import { ReactComponent as Search } from "Background/3_menu/menuIconSearch.svg";
import { ReactComponent as Events } from "Background/3_menu/menuIconEvents.svg";
import { ReactComponent as Artist } from "Background/3_menu/menuIconArtists.svg";
import { ReactComponent as Collections } from "Background/3_menu/menuIconCollections.svg";
import { ReactComponent as Visit } from "Background/3_menu/menuIconVisit.svg";
import { ReactComponent as Member } from "Background/3_menu/menuIconMember.svg";
import { ReactComponent as Shop } from "Background/3_menu/menuIconShop.svg";


function Navbar() {
    return (
        <nav className="navigationBar">
            <div className="descMenu">THE ART MUSEUM</div>
            <HamburgerMenu className="hamburgerMenu"/>
            <div className="siteMenu">
                <ul>
                    <li>
                        <div className="icon">
                            <Search />
                        </div>
                        <input className="search" type="text" name="search" text="Search" />
                    </li>
                    <li>
                        <div className="icon">
                            <Events />
                        </div>
                        <a href="#exhibitions">
                            Exhibitions and Events
                        </a>
                    </li>
                    <li>
                        <div className="icon">
                            <Artist />
                        </div>
                        <a href="#artists">
                            Artists and Artworks
                        </a>
                    </li>
                    <li>
                        <div className="icon">
                            <Collections />
                        </div>
                        <a href="#collections">
                            Collections
                        </a>
                    </li>
                    <li>
                        <div className="icon">
                            <Visit />
                        </div>
                        <a href="#exhibitions">
                            Plan Your Visit
                        </a>
                    </li>
                    <li>
                        <div className="icon">
                            <Member />
                        </div>
                        <a href="#member">
                            Become a Member
                        </a>
                    </li>
                    <li>
                        <div className="icon">
                            <Shop />
                        </div>
                        <a href="#shop">
                            Shop
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
