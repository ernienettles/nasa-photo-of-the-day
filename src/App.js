import React from "react";
import "./Reset.css";
import ContentContainer from "./components/ContentContainer";
import styled from "styled-components";


const AppStyle = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
`

const MainTitle = styled.h1`
  font-size: 8rem;
  color: white;
`


function App() {
  return (
    <AppStyle>
      <AppHeader>
        <MainTitle>Nasa Picture of the Day</MainTitle>
      </AppHeader>
      <ContentContainer />
    </AppStyle>
  );
}

export default App;
