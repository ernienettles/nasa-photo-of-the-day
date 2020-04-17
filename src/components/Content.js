import React from "react";
import styled from "styled-components";

const ContentSection = styled.div`

    background-color: seagreen;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    color: white;
`;

const Content = styled.div`
    background-color: seagreen;
    width: 40%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    color: white;
`;

const Title = styled.h2`
    width: 100%;
    font-size: 4rem;
    margin: 5% 0;
    color: #282c34;
`;

const Date = styled.h3`
    width: 100%;
    font-size: 3rem;
    margin: 5% 0;
    color: #282c34;
`;

const Text = styled.p`
    width: 100%;
    font-size: 1.5rem;
    margin: 5% 2%;
`

const ImageContainer = styled.div`
    width: 40%;
`;



const SetContent = (props) => {


    return (
        <ContentSection>
            <Content>
                <Title>{props.title}</Title>
                <Date>{props.date}</Date>
                <Text>{props.explanation}</Text>
            </Content>
            <ImageContainer>
            <img src={props.image} alt="Nasa's daily thing"></img>
            </ImageContainer>
        </ContentSection>
    )
}

export default SetContent