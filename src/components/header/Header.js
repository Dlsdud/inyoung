import React from "react";
// import { Link } from 'react-router-dom';
import "./Header.scss";

function Header() {
    return(
        <div className="Header">
            <div>
                <div className="headerText">
                    <ul>
                        <li className="header-li">Contact</li>
                        <li className="header-li">Project</li>
                        <li className="header-li">About</li>
                        <li className="header-li">Home</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;