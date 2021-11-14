import React from "react";
import styled from "styled-components";

const Skill = styled.div`
    background-color: #ECBB58;
    width: 100%;
    height: 800px;
`;

const Inner = styled.div`
    margin-left: 150px;
    margin-right: 150px;
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
    padding: 4rem 2rem;
    width: 100%;
    max-width: 71.25rem;

`;

const SkillTitle = styled.div`
    font-size: 50px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 50px;
`;

const SkillCon = styled.div`
    display: flex;
    flex-direction: row;
`;

const BoxInfo = styled.div`
    position: relative;
`;

const SkillBox = styled.div`
    width: 250px;
    height: 400px;
    padding:3rem;
    margin: 0 auto 2rem;
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;

    &: hover{
        opacity: 0.95;
    }
`;

const BoxTitle = styled.div`
    display: flex;
    flex-direction: left;
    font-size: 25px;
`;

const Img = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.7rem;
`;

const SkillImg = styled.img`
    width: 100%;
    max-width: fit-content;
    max-hegiht: fit-content;
`;

const Skills = () => {
    return(
        <Skill>
            <Inner>
                <SkillTitle>Skills</SkillTitle>
                <SkillCon>
                    <SkillBox>
                        <BoxInfo>
                            <BoxTitle>Front-end</BoxTitle>
                            <hr/>
                            <Img>
                                <SkillImg src={process.env.PUBLIC_URL + "/img/html_css_js.png"}/>
                                <SkillImg src={process.env.PUBLIC_URL + "/img/react_logo.png"}/>
                            </Img>
                        </BoxInfo>
                    </SkillBox>
                    <SkillBox>
                        <BoxInfo>
                            <BoxTitle>Back-end</BoxTitle>
                            <hr/>
                            <Img>
                                <SkillImg src={process.env.PUBLIC_URL + "/img/java_logo.png"}/>
                                <SkillImg src={process.env.PUBLIC_URL + "/img/python_logo.png"}/>
                                <SkillImg src={process.env.PUBLIC_URL + "/img/oracle_logo.png"}/>
                            </Img>
                        </BoxInfo>
                    </SkillBox>
                    <SkillBox>
                        <BoxInfo>
                            <BoxTitle>Certificate</BoxTitle>
                            <hr/>
                            <Img>
                                <SkillImg src={process.env.PUBLIC_URL + "/img/qnet_logo.jpg"}/>
                            </Img>
                            정보처리산업기사(필기 + 실기)
                        </BoxInfo>
                    </SkillBox>

                </SkillCon>
            </Inner>
        </Skill>
    )
}

export default Skills;