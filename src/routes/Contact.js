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
    padding-left: 100px;
    padding-right: 100px;
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

const ContactCon = styled.div`
    display:flex;
    flex-direction: column;
    font-size: 25px;    
    gap: 1rem;
    position: absolute;
    left: 40%;
`;

const MyName = styled.div`
`;

const Email = styled.div`
`;

const Github = styled.div`

    a{
        text-decoration-line: none;
        color: black;
    }

    a: hover {
        color: #888;
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
                            Github  Dlsdud
                        </a>
                    </Github>
                </ContactCon>
            </Inner>
        </Cconst>
    )
}

export default Contact;