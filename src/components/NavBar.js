import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledNav = styled.div`
display: flex;
justify-content: space-around;
`

class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                <div><Link to="/" >Home</Link></div>
                <div><Link to="/about" >About</Link></div>
                <div><Link to="/projects" >Projects</Link></div>
                <div><Link to="/resume" >Resume</Link></div>
            </StyledNav>
        );
    }
}

export default NavBar;