import React from 'react';
import './collections.css';
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import Navbar from 'Components/common/navbar/navbar';
// images import
import { ReactComponent as SearchIcon } from "Background/6_collections/searchIcon.svg";
// items
import { ReactComponent as CollectionItem1 } from "Background/6_collections/collectionImage1.svg";
import { ReactComponent as CollectionItem2 } from "Background/6_collections/collectionImage2.svg";
import { ReactComponent as CollectionItem3 } from "Background/6_collections/collectionImage3.svg";
import { ReactComponent as CollectionItem4 } from "Background/6_collections/collectionImage4.svg";
import { ReactComponent as CollectionItem5 } from "Background/6_collections/collectionImage5.svg";
import { ReactComponent as CollectionItem6 } from "Background/6_collections/collectionImage6.svg";



function Collections() {
    return (
        <div>
            <StatusBar className="status" />
            <Navbar />
            <div className="siteTitle">Collections</div>
            <div className="collectionsSearch">
                <input type="text" name="search" value="Explore the Collection" />
                <SearchIcon />
            </div>
            <div className="advancedSearch">Advanced Search</div>
            <div className="colectionItems">
                <div className="item">
                    <CollectionItem1 />
                    <p className="itemDescription">DECORATIVE ARTS AND CRAFTS</p>
                </div>
                <div className="item">
                    <CollectionItem2 />
                    <p className="itemDescription">AMERICAN IMPRESSIONISM</p>
                </div>
                <div className="item">
                    <CollectionItem3 />
                    <p className="itemDescription">DE STIJL</p>
                </div>
                <div className="item">
                    <CollectionItem4 />
                    <p className="itemDescription">CUBISM</p>
                </div>
                <div className="item">
                    <CollectionItem5 />
                    <p className="itemDescription">AMERICAN</p>
                </div>
                <div className="item">
                    <CollectionItem6 />
                    <p className="itemDescription">GREEK ANTIQUITIES</p>
                </div>
            </div>
            
        </div>
    );
}

export default Collections;