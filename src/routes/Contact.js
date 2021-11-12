import React from "react";
//import "./Contact.scss";
import styled from "styled-components";

const Cconst = styled.div`
    top: 0;
    width: 100%;
    height: 700px;
`;

const Inner = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
    padding: 4rem 2rem;
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
`;

const Email = styled.div`
    display: flex;
    justify-content: center;
    font-size: 25px;
`;

function Contact() {
    return(
        <Cconst>
            <Inner>
                <ContactTitle>
                    Contact
                </ContactTitle>
                <Email>
                    inyounnng@gmail.com
                </Email>
            </Inner>
        </Cconst>
    )
}

export default Contact;