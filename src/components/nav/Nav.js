import React from "react";
import { Link } from 'react-router-dom';

import "./Nav.scss";

function Nav() {
    return(
        <div>

            <Link to="/" className="logo">INYOUNG</Link>

        </div>

    );
}

export default Nav;