import React from "react";
//import "./About.scss";
import { BsPersonFill,BsCalendarEventFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

const Aabout = styled.div`
    top: 0;
    width: 100%;
    padding-bottom: 130px;
    padding-top: 150px;
    @media screen and (max-width: 687px) {
        padding-top: 100px;
    } 
`;

const AboutME = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5px;
    font-size: 40px;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #E36761;
    @media screen and (max-width: 687px) {
        font-size: 35px;
    } 
`;

const Info = styled.div`
    padding: 100px;
    margin: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;  
    @media screen and (max-width: 687px) {
        display:flex;
        flex-direction: column;
        gap: 3rem;
        margin: 0 auto;
        padding: 70px;
        align-items: center;
    } 
`;

const InfoBox = styled.div`
    width: auto;
    display: flex;  
    @media screen and (max-width: 687px) {
        width: 100%;
        align-items: center;
    } 
`;

const InfoImg = styled.div`
    margin-right: 10px;
    font-size: 47px;
    display: flex;
    @media screen and (max-width: 687px) {
        font-size: 37px;
        align-items: center;
        padding-right: 20px;
    } 
`;

const LeftCol = styled.div`
    display: flex;

`;

const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 687px) {
        
    } 
`;

const InfoText = styled.div`
    font-weight: bold;
    font-size: 15px;
    @media screen and (max-width: 687px) {
        font-size: 13px;
    } 
`;

const Content = styled.div`
    padding-top: 10px;
    font-size: 20px;
    @media screen and (max-width: 687px) {
        font-size: 18px;
        width: 100%;

    } 
`;

function About() {
    return(
        <Aabout>
            <AboutME>About Me</AboutME>
            <Info>
                <InfoBox>
                    <LeftCol>
                        <InfoImg><BsPersonFill/></InfoImg>
                    </LeftCol>
                    <RightCol>
                        <InfoText>이름</InfoText>
                        <Content>최인영</Content>
                    </RightCol>
                </InfoBox>
                <InfoBox>
                    <LeftCol>
                        <InfoImg><BsCalendarEventFill /></InfoImg>
                    </LeftCol>
                    <RightCol>
                        <InfoText>생년월일</InfoText>
                        <Content>2001.02.13</Content>
                    </RightCol>
                </InfoBox>
                <InfoBox>
                    <LeftCol>
                        <InfoImg><IoLocationSharp /></InfoImg>
                    </LeftCol>
                    <RightCol>
                        <LeftCol>
                            <InfoText>주소지</InfoText>
                        </LeftCol>          
                        <Content>부산광역시</Content>
                    </RightCol>
                </InfoBox>
                <InfoBox>
                    <LeftCol>
                        <InfoImg><MdEmail /></InfoImg>
                    </LeftCol>
                    <RightCol>
                        <InfoText>이메일</InfoText>
                        <Content>inyounnng@gmail.com</Content>
                    </RightCol>
                </InfoBox>
            </Info>
        </Aabout>
    )
}

export default About;