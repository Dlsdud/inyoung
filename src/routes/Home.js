import React, { useState, useEffect } from "react";
import "./Home.scss";
import About from './About.js';
import useTypewriter from "react-typewriter-hook";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../components/footer/Footer";

function Home() {
    const txt = "웹 개발자 최인영의 포트폴리오입니다.  ";
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
        <div className="typer">
            <div className="Image">
                <img className="bgImg" src="img/backgroundImg.png" alt="backgroundImg"/>
            </div>
            <div id="1" className="text" >
                <p className="cursor">{name}</p>
            </div>
            <div>
                <div id="2">
                    <About />
                </div>
                <div id="3">
                    <Project />
                </div>
                <div id="4">
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>

        
    )
    
}

export default Home;