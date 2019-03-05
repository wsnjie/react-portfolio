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

class Home extends Component {

    render() {
        return (
            <StyledHero>
                <div>
                    <h1>Hey There! My name is William, but you can call me Will :)</h1>
                    <h2>I'm a web developer from Atlanta, GA.</h2>
                </div>
            </StyledHero>
        );
    }
}

export default Home;