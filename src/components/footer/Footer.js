import React from "react";
//import "./Footer.scss";
import styled from "styled-components";

const Ffooter = styled.div`
    height: 60px;
    width: 100%;
    padding-top: 20px;
    background-color:#333;
`;

const Info = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Copyright = styled.div`
    font-size: 15px;
    padding-top: 15px;
`;

function Footer() {
    return(
        <Ffooter>
            <Info>
                <Copyright>
                    ⓒ 2021 Choi In Young. ALL RIGHTS RESERVED.
                </Copyright>
            </Info>

        </Ffooter>
    )
}

export default Footer;