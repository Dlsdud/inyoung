import React from "react";
import Home from "./Home";
import styled from "styled-components";
import Header from "../components/header/Header.js";

const Div = styled.div`
`;

const Main = () => {
    return(
        <Div>
            <Header/>
            <Home/>
        </Div>
    )
}

export default Main;