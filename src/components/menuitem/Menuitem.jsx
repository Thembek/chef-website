import React from 'react';
import './menuitem.css';

const Menuitem = ({ title, price, tags }) => (
    <div className="app__menuitem">
        <div className="app__menuitem-head">
            <div className="app__menuitem-name">
                <p className="=__cormorant" style={{ color: "#DCCA87" }}>{title}</p>
            </div>
            <div className="app__menuitem-dash" />
            <div className="app_menuitem-price">
                <p className="p__cormorant">{price}</p>
            </div>
        </div>

        <div className="app__menuitem-sub">
            <p className="p__opensans" style={{ color: "#AAAAAA"}}>{tags}</p>
        </div>
    </div>
);

export default Menuitem;