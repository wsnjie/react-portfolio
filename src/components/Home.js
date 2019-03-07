import React, { Component } from 'react';
import styled from "styled-components"

const StyledHero = styled.div`
color: #00A3A3;
font-size: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
align-content: center;
justify-content: center;
`
const StyledP = styled.p`
padding: 0px;
margin: 0px;
font-style: italic;
`

const StyledH1 = styled.h1`
padding: 0px;
margin: 0px;
`
class Home extends Component {

    render() {
        return (
            <StyledHero>
                <div>
                    <StyledH1>Hey There! My name is William, </StyledH1>
                    <StyledP>but you can call me Will :)</StyledP>
                    <h2>I'm a web developer from Atlanta, GA.</h2>
                </div>
            </StyledHero>
        );
    }
}

export default Home;