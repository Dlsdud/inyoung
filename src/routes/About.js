import React from "react";
import "./About.scss";
import { BsPersonFill } from "react-icons/bs";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function About() {
    return(
        <div className="About">
            <div className="aboutme">About Me</div>
            <div className="info">
                <div className="info-box">
                    <div className="left-col">
                        <div className="info-img"><BsPersonFill/></div>
                    </div>
                    <div className="right-col">
                        <div className="info-text">이름</div>
                        <div className="content">최인영</div>
                    </div>
                </div>
                <div className="info-box">
                    <div className="left-col">
                        <div className="info-img"><BsCalendarEventFill /></div>
                    </div>
                    <div className="right-col">
                        <div className="info-text">생년월일</div>
                        <div className="content">2001.02.13</div>
                    </div>
                </div>
                <div className="info-box">
                    <div className="left-col">
                        <div className="info-img"><IoLocationSharp /></div>
                    </div>
                    <div className="right-col">
                        <div className="left-col">
                            <div className="info-text">주소지</div>
                        </div>          
                        <div className="content">부산광역시</div>
                    </div>
                </div>
                <div className="info-box">
                    <div className="left-col">
                        <div className="info-img"><MdEmail /></div>
                    </div>
                    <div className="right-col">
                        <div className="info-text">이메일</div>
                        <div className="content">inyounnng@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;