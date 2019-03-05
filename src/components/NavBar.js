import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledNav = styled.div`
display: flex;
justify-content: space-around;
`
const StyledNavButton = styled.div`
display: flex;
align-items: center;
justify-items: center;
height: 35px;
width: auto;
border: 3px solid #FF0066;
border-radius: 10%;
background: #FF0066
a {
    color:#00FFCD;
    text-decoration: none;
}
`

class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                <StyledNavButton><Link to="/" >Home</Link></StyledNavButton>
                <StyledNavButton><Link to="/about" >About</Link></StyledNavButton>
                <StyledNavButton><Link to="/projects" >Projects</Link></StyledNavButton >
                <StyledNavButton><Link to="/resume" >Resume</Link></StyledNavButton >
            </StyledNav >
        );
    }
}

export default NavBar;