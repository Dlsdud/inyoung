import React from "react";
import "./Footer.scss";
import { SiGmail } from "react-icons/si"

function Footer() {
    return(
        <footer className="Footer">
            <div className="infor">
                <div className="name">최인영  Choi In Young</div>
                {/* <div className="email">E-mail: inyounnng@gmail.com</div> */}
                <SiGmail />
                <div className="copyright">
                    ⓒ 2021 INYOUNG ALL RIGHTS RESERVED.
                </div>
            </div>

        </footer>
    )
}

export default Footer;