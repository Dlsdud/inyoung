import React from "react";
//import "./Contact.scss";
import styled from "styled-components";

const Cconst = styled.div`
    top: 0;
    width: 100%;
    height: 600px;
    @media screen and (max-width: 1187px) {
        padding-top: 100px;
    }
`;

const Inner = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    padding-left: 100px;
    padding-right: 100px;
    padding: 4rem 2rem;
    @media screen and (max-width: 1187px) {
        margin: 0 auto;
    }
`;

const ContactTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
    font-size: 40px;  
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #E36761;  
    @media screen and (max-width: 1187px) {
        font-size: 35px;
    } 
`;

const ContactCon = styled.div`
    display:flex;
    flex-direction: column;
    font-size: 25px;    
    gap: 1rem;
    position: absolute;
    left: 40%;
    @media screen and (max-width: 1187px) {
        left: 17%;
    } 
`;

const MyName = styled.div`
`;

const Email = styled.div`
`;

const Github = styled.div`

    a{
        text-decoration-line: none;
        color: black;
        display: flex;
    }

    a: hover {
        color: #888;
    }
`;

const ClickBox = styled.div`
    border-radius: 10px;
    background-color: red;
    color: #fff;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;

    &: hover {
        background-color: #999;
    }
`;

function Contact() {
    return(
        <Cconst>
            <Inner>
                <ContactTitle>
                    Contact
                </ContactTitle>
                <ContactCon>
                    <MyName>
                        최인영 <br/>
                        Choi In Young <br/><br/><br/>
                    </MyName>
                    <Email>
                        E-mail inyounnng@gmail.com
                    </Email>
                    <Github>
                        <a href="https://github.com/Dlsdud">
                            Github  Dlsdud &nbsp;
                            <ClickBox>CLICK!</ClickBox>
                        </a>
                    </Github>
                </ContactCon>
            </Inner>
        </Cconst>
    )
}

export default Contact;