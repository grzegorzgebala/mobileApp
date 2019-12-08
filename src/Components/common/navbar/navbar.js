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
        <div className="container">
            <nav className="navigationBar">
                <div className="descMenu">THE ART MUSEUM</div>
                <HamburgerMenu className="hamburgerMenu"/>
                <div className="siteMenu">
                    <ul>
                        <li>
                            <Search />
                            <input className="search" type="text" name="search" value="Search"/>
                        </li>
                        <li>
                            <Events />
                            <a href="#exhibitions">
                                Exhibitions and Events
                            </a>
                        </li>
                        <li>
                            <Artist />
                            <a href="#artists">
                                Artists and Artworks
                            </a>
                        </li>
                        <li>
                            <Collections />
                            <a href="#collections">
                                Collections
                            </a>
                        </li>
                        <li>
                            <Visit />
                            <a href="#exhibitions">
                                Plan Your Visit
                            </a>
                        </li>
                        <li>
                            <Member />
                            <a href="#member">
                                Become a Member
                            </a>
                        </li>
                        <li>
                            <Shop />
                            <a href="#shop">
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
