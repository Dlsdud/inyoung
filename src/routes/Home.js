import React, { useState, useEffect } from "react";
//import "./Home.scss";
import About from './About.js';
import useTypewriter from "react-typewriter-hook";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
//import Skills from "./Skills.js";


const Typer = styled.div`
    top: 0;
    width: 100%;
    height: 1300px;
    position: relative;
    @media screen and (max-width: 1187px) {
    }
`;

const BgImg = styled.img`
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background-size: cover;

    width: 100%;
    height: 600px;
    background: rgba(0, 0, 0, 0.5);
    z-index: -2;
    opacity: 0.4;
    @media screen and (max-width: 1187px) {
    }
`;

const Cursor = styled.p`
    display: inline-block;
    position: relative;

    &::after {
        content: "";
        margin: auto;
        position: absolute;
        right: -8px;
        top: 246px;
        width: 4px;
        height: 10%;
        background-color: black;
        animation: cursor-animation 1.5s step-end infinite;
    }
    @keyframes cursor-animation {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }


`;


const Textex = styled.div`
    display: flex;
    justify-content: center;
    line-height: 550px;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    @media screen and (max-width: 1187px) {
        font-size: 1.3rem;
    }
`;

function Home() {
    const txt = "신입 개발자 최인영의 포트폴리오입니다.   ";
    const [Text, setText] = useState("");
    const [Count, setCount] = useState(0);

    const name = useTypewriter(txt);
    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count]);
            setCount(Count + 1);
        }, 5000);
        if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval 해제
        }
        return () => clearInterval(interval);
        }
      );

    return(
        <div>
            <Typer>
                <div className="bgImage">
                    <BgImg src={process.env.PUBLIC_URL + '/img/backgroundImg.jpg'}/>
                </div>
                <Textex id="1" >
                    <Cursor>{name}</Cursor>
                </Textex>
                <div>
                    <div id="2">
                        <About />
                    </div>
                    {/* <div id="3">
                        <Skills />
                    </div> */}
                    <div id="4">
                        <Project />
                    </div>
                    <div id="5">
                        <Contact />
                    </div>
                    <Footer />
                </div>
            </Typer>
        </div>

        
    )
    
}

export default Home;