import React from "react";
import { Link } from "react-scroll";
//import "./Header.scss";
import styled from "styled-components";

const Hheader = styled.div`
    width: 100%;
    position: fixed;
    z-index: 2;

    @media screen and (max-width: 687px) {
        background-color: black;
        height: 60px;
    }
`;

const HeahderItem = styled.div`
    height: 55px;
    width: 95%;
    top: 0;
    @media screen and (max-width:687px) {
        width: 100%;
    }
`;

const HeaderText = styled.div`
    float: right;
    height: 80px;
    width: 750px;
    background-color: #888;
    border-radius: 30px;
    margin-top: -25px;
    background-color: rgba( 0, 0, 0, 0.5 );
    @media screen and (max-width:687px) {
        width: 100%
        display: flex;
        background-color: rgba(0, 0, 0, 0);
        padding-top: 22px;
    }
`;

const HeaderUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 0;
    padding-right: 0;

    @media screen and (max-width: 687px) {
        padding-left: 255px;
    }
`;

const HeaderLi = styled.li`
    font-size: 20px;
    font-weight: bold;
    list-style: none;
    margin-top: 25px;
    display: flex;

    &:hover {
        color: #EAB137;
    }

    @media screen and (max-width:687px) {
        font-size: 15px;
        margin-top: 9px;
        justify-content: space-around;
        color: white;

        &:hover {
            color: #EAB137;
        }
    }
`;

function Header() {
    return(
        <Hheader>
            <HeahderItem>
                    <HeaderText>
                        <HeaderUl>      
                            <Link to="1" spy={true} smooth={true}>
                                <HeaderLi>Home</HeaderLi>
                            </Link>    
                            <Link to="2" spy={true} smooth={true}>
                                <HeaderLi>About me</HeaderLi>
                            </Link>   
                            {/* <Link to="3" spy={true} smooth={true}>
                                <HeaderLi>Skills</HeaderLi>
                            </Link>    */}
                            <Link to="4" spy={true} smooth={true}>
                                <HeaderLi>Project</HeaderLi>
                            </Link>            
                            <Link to="5" spy={true} smooth={true}>
                                <HeaderLi>Contact</HeaderLi>
                            </Link>
                        </HeaderUl>
                    </HeaderText>
            </HeahderItem>
        </Hheader>
    )
}

export default Header;