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
        if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval);
        }
      );

    return(
        <div className="typer">
            <div className="text" >
                <p className="cursor">{name}</p>
            </div>
            <div>
                <About />
                <Project />
                <Contact />
                <Footer />
            </div>
        </div>

        
    )
    
}

export default Home;