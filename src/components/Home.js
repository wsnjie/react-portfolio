import React, { Component } from 'react';
import styled from "styled-components"
import { Hero, HeroBody, Container } from 'bloomer'
import Navigation from './Navigation';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const StyledHero = styled.div`
color: #00A3A3;
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
font-size: 100px;
padding: 0px;
margin: 0px;
`
class Home extends Component {

    render() {
        return (
            <StyledHero>
                <Hero>
                    <HeroBody>
                        <Container hasTextAlign='centered'>
                            <StyledH1>Hi! My name is William,</StyledH1>
                            <StyledP>but you can call me Will :)</StyledP>
                            <h2>I'm a web developer from Atlanta, GA.</h2>
                        </Container>
                    </HeroBody>
                </Hero>
            </StyledHero >
        );
    }
}

export default Home;