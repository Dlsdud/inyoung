import React from "react";
import "./Project.scss";
import { BsGithub } from "react-icons/bs";

function Project() {
    return(
        <div className="Project">
            <div className="inner">
                <div className="project-title">PROJECT</div>
                <div className="project-content">
                    <div className="Box">
                        <div className="Box-img">
                            <img className="image" src="img/healthTrainer.png" alt="healthTrainer" />
                        </div>
                        <div className="Box-info">
                            <div className="Box-title">Big Wave - 헬스트레이너</div>
                            <div className="name">개발기간: 2020.06.14 ~ 2021.09.16(3인 팀프로젝트)</div>
                            <div className="content">
                                구글 Teachable Machine의 자세추론 기술을 활용한 헬스 트레이너 <br />
                                스쿼트 자세의 올바름을 판단하여 음성으로 알려줍니다.
                            </div>
                            <hr />
                            <div className="description">
                                <div className="project-label">주요기능</div>
                                <div className="project-value">스쿼트 자세 올바름 판단, 타이머</div>
                            </div>

                            <div className="category">
                                #Javascript
                            </div>
                            <div className="github">
                                <a href="https://github.com/Dlsdud/Deep_trainer.git">
                                    <BsGithub size="24" color="black"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Box">
                        <div className="Box-img">
                            <img className="image" src="img/ppoyami.png" alt="ppoyami"/>
                        </div>
                        <div className="Box-info">
                            <div className="Box-title">뽀야미 - 악세사리 쇼핑몰</div>
                            <div className="name">개발기간: 2021.04.29 ~ 2021.06.21(3인 팀프로젝트)</div>
                            <div className="content">
                                JSP로 만든 액세서리 온라인 판매 사이트 <br/>
                                Oracle을 사용하여 상품, 회원목록을 관리
                            </div>
                            <hr />
                            <div className="description">
                                <div className="project-label">주요기능</div>
                                <div className="project-value">회원가입, 로그인, 게시판, 상품 카테고리, 장바구니 담기&삭제,<br/> 카카오톡 1대1 상담</div>
                            </div>

                            <div className="category">
                                #JSP #Oracle
                            </div>
                            <div className="github">
                                <a href="https://github.com/Dlsdud/2021.2-1.JSP.git">
                                    <BsGithub size="24" color="black"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Box">
                        <div className="Box-img">
                            <img className="image" src="img/healthTrainer.png" alt="healthTrainer" />
                        </div>
                        <div className="Box-info">
                            <div className="Box-title">포트폴리오 웹사이트</div>
                            <div className="name">개발기간: 2021.10.21 ~ 2021.10.25</div>
                            <div className="content">
                                포트폴리오 용도로 제작한 React.js 기반의 웹사이트입니다. <br/>
                                Netlify를 이용하여 배포하였습니다.
                            </div>
                            <hr />
                            <div className="description">
                                <div className="project-label">주요기능</div>
                                <div className="project-value">간단한 자기소개, 인적 사항, 프로젝트 경험</div>
                            </div>

                            <div className="category">
                                #React
                            </div>
                            <div className="github">
                                <a href="https://github.com/Dlsdud/2021.2-1.JSP.git">
                                    <BsGithub size="24" color="black"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;