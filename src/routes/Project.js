import React from "react";
//import "./Project.scss";
import { BsGithub } from "react-icons/bs";
import styled from 'styled-components';

const Pro = styled.div`
    top: 0;
    width: 100%;
    height: 1700px;
    background-color: #92D1BD;
    @media screen and (max-width: 687px) {
        align-items: center;
        height: 2000px;
    }
`;

const Inner = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    padding-left: 70px;
    padding-right: 70px;
    margin: 0 auto;
    padding: 4rem 2rem;
    width: 100%;
    max-width: 71.25rem;
    @media screen and (max-width: 687px) {
        padding: 0;
    }
`;

const ProjectTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
    font-size: 50px;
    @media screen and (max-width: 687px) {
        font-size: 35px;
        padding-bottom: 55px;
    }
`;

const ProjectContent = styled.div`
    display: block;
    @media screen and (max-width: 687px) {
    }
`;

const Box = styled.div`
    padding: 3rem;
    margin: 0 auto 2rem;
    border-radius: 1.5rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 687px) {
        justify-content: space-evenly;
        padding: 1rem;
        flex-direction: column;
        width: 80%;
        height: 490px;
    } 
`;

const BoxImg = styled.div`
    position: relative;
    margin-right: 50px;

    @media screen and (max-width: 687px;) {
        margin-right: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
`;

const ProejctImage = styled.img`
    width: 500px;
    height: 300px;
    max-width: fit-content;
    max-height: fit-content;

    @media screen and (max-width: 687px) {
        width: 110%;
        height: 110%;
        flex: 1;    

    }
`;

const BoxInfo = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    @media screen and (max-width: 687px) {
        width: 100%;
        height: 180px;

    }
`;

const BoxTitle = styled.div`
    font-size: 25px;
    padding-bottom: 12px;
    @media screen and (max-width: 687px) {
        font-size: 18px;
        padding-bottom: 9px;
    }
`;

const Name = styled.div`
    font-size: 18px;
    padding-bottom: 12px;
    color: #777;
    @media screen and (max-width: 687px) {
        font-size: 13px;
        padding-bottom: 8px;
    }
`;

const Content = styled.div`
    font-size: 18px;
    padding-bottom: 10px;
    @media screen and (max-width: 687px) {
        font-size: 17px;
        padding-bottom: 0;
        width: 100%;
        white-space: normal;

    }
`;

const Description = styled.div`
    padding-bottom: 15px;
    @media screen and (max-width: 687px) {
        font-size: 18px;
        padding-bottom: 10px;
    }
`;

const ProjectLabel = styled.div`
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 5px;
    @media screen and (max-width: 687px) {
        font-size: 13px;

    }
`;

const ProejctValue = styled.div`
    @media screen and (max-width: 687px) {
        font-size: 13px;

    }
`;

const Category = styled.div`
    font-size: 20px;
    padding-bottom: 25px;
    @media screen and (max-width: 687px) {
        font-size: 13px;
        padding-bottom: 10px;
    }
`;

const Github = styled.div`

`;

function Project() {
    return(
        <Pro>
            <Inner>
                <ProjectTitle>PROJECTS</ProjectTitle>
                <ProjectContent>
                    <Box>
                        <BoxImg>
                            <ProejctImage src={process.env.PUBLIC_URL + '/img/healthTrainer.png'}/>
                        </BoxImg>
                        <BoxInfo>
                            <BoxTitle>Big Wave - ??????????????????</BoxTitle>
                            <Name>????????????: 2020.06.14 ~ 2021.09.16(3??? ???????????????)</Name>
                            <Content>
                                ?????? Teachable Machine??? ???????????? ????????? ????????? ?????? ???????????? <br />
                                ????????? ????????? ???????????? ???????????? ???????????? ???????????????.
                            </Content>
                            <hr/>
                            <Description>
                                <ProjectLabel>????????????</ProjectLabel>
                                <ProejctValue>????????? ?????? ????????? ??????, ?????????</ProejctValue>
                            </Description>
                            <Category>
                                #Javascript
                            </Category>
                            <Github>
                                <a href="https://github.com/Dlsdud/Deep_trainer.git">
                                    <BsGithub size="27" color="black"/>
                                </a>
                            </Github>
                        </BoxInfo>
                    </Box>
                    <Box>
                        <BoxImg>
                            <ProejctImage src={process.env.PUBLIC_URL + "/img/ppoyami.png"}/>
                        </BoxImg>
                        <BoxInfo>
                            <BoxTitle>????????? - ???????????? ?????????</BoxTitle>
                            <Name>????????????: 2021.04.29 ~ 2021.06.21(3??? ???????????????)</Name>
                            <Content>
                                JSP??? ?????? ???????????? ????????? ?????? ????????? <br/>
                                Oracle??? ???????????? ??????, ??????????????? ??????
                            </Content>
                            <hr/>
                            <Description>
                                <ProjectLabel>????????????</ProjectLabel>
                                <ProejctValue>????????????, ?????????, ?????????, ?????? ????????????, ???????????? ??????&??????,<br/> ???????????? 1???1 ??????</ProejctValue>
                            </Description>
                            <Category>
                                #JSP #Oracle
                            </Category>
                            <Github>
                                <a href="https://github.com/Dlsdud/2021.2-1.JSP.git">
                                    <BsGithub size="27" color="black"/>
                                </a>
                            </Github>
                        </BoxInfo>
                    </Box>
                    <Box>
                        <BoxImg>
                            <ProejctImage src={process.env.PUBLIC_URL + "/img/portfolio.png"}/>
                        </BoxImg>
                        <BoxInfo>
                            <BoxTitle>??????????????? ????????????</BoxTitle>
                            <Name>????????????: 2021.10.21 ~ 2021.10.25</Name>
                            <Content>
                                ??????????????? ????????? ????????? React.js ????????? ?????????????????????. <br/>
                                Github??? ???????????? ?????????????????????.
                            </Content>
                            <hr/>
                            <Description>
                                <ProjectLabel>????????????</ProjectLabel>
                                <ProejctValue>????????? ????????????, ?????? ??????, ???????????? ??????</ProejctValue>
                            </Description>
                            <Category>
                                #React
                            </Category>
                            <Github>
                                <a href="https://github.com/Dlsdud/2021.2-1.JSP.git">
                                    <BsGithub size="27" color="black"/>
                                </a>
                            </Github>
                        </BoxInfo>
                    </Box>
                </ProjectContent>
            </Inner>
        </Pro>
    )
}

export default Project;