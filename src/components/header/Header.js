import React from "react";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import "./Header.scss";

function Header() {
    return(
        <div className="Header">
            <div>
                <div className="headerText">
                    <ul>
                        <Link to="4" spy={true} smooth={true}>
                            <li className="header-li">Contact</li>
                        </Link>
                        <Link to="3" spy={true} smooth={true}>
                            <li className="header-li">Project</li>
                        </Link>
                        <Link to="2" spy={true} smooth={true}>
                            <li className="header-li">About</li>
                        </Link>
                        <Link to="1" spy={true} smooth={true}>
                            <li className="header-li">Home</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;