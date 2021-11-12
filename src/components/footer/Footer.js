import React from "react";
//import "./Footer.scss";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const Ffooter = styled.div`
    height: 120px;
    width: 100%;
    padding-top: 40px;
    background-color:#333;
`;

const Info = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const FtName = styled.div`
    font-size: 16px;
    padding-bottom: 15px;
`;

const Sns = styled.div`
    margin: 0 auto;
`;

const Copyright = styled.div`
    font-size: 13px;
    padding-top: 15px;
`;

function Footer() {
    return(
        <Ffooter>
            <Info>
                <FtName>
                    최인영  Choi In Young
                </FtName>
                <Sns>
                    <a href="https://github.com/Dlsdud">
                        <BsGithub size="33" color="#fff"/>
                    </a>
                </Sns>
                <Copyright>
                    ⓒ 2021 INYOUNG ALL RIGHTS RESERVED.
                </Copyright>
            </Info>

        </Ffooter>
    )
}

export default Footer;