import React from 'react';
import './navbar.css';
import { ReactComponent as HamburgerMenu } from "Background/0_common/hamburgerMenu.svg";
import { ReactComponent as Search } from "Background/3_menu/menuIconSearch.svg";
import { ReactComponent as Events } from "Background/3_menu/menuIconEvents.svg";
import { ReactComponent as Artist } from "Background/3_menu/menuIconArtists.svg";
import { ReactComponent as Collections } from "Background/3_menu/menuIconCollections.svg";
import { ReactComponent as Visit } from "Background/3_menu/menuIconVisit.svg";
import { ReactComponent as Member } from "Background/3_menu/menuIconMember.svg";
import { ReactComponent as Shop } from "Background/3_menu/menuIconShop.svg";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {
        active: ''
    }
    addActiveClass = (e) => {
        const clicked = e.target.id
        if(this.state.active === clicked) { 
            this.setState({active: ''});
        } else {
            this.setState({active: clicked})
        }
    }
    render() {
        return <nav className="navigationBar">
            <div className="descMenu">THE ART MUSEUM</div>
            <HamburgerMenu className={`hamburgerMenu ${this.state.active === "first"? 'active': ''}`} id="first" onClick={this.addActiveClass}/>
            <div className="siteMenu">
                <ul>
                    <li>
                        <div className="icon">
                            <Search />
                        </div>
                        <input className="search" type="text" name="search" defaultValue="Search" />
                    </li>
                    <li>
                        <div className="icon">
                            <Events />
                        </div>
                        <Link to="/exhibition">
                            Exhibitions and Events
                        </Link>
                    </li>
                    <li>
                        <div className="icon">
                            <Artist />
                        </div>
                        <Link to="/home">
                            Artists and Artworks
                        </Link>
                    </li>
                    <li>
                        <div className="icon">
                            <Collections />
                        </div>
                        <Link to="/collections">
                            Collections
                        </Link>
                    </li>
                    <li>
                        <div className="icon">
                            <Visit />
                        </div>
                        <Link to="/plan">
                            Plan Your Visit
                        </Link>
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
                        <Link to="/shop">
                            Shop
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    };
};
export default Navbar;
