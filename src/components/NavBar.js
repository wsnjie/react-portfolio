import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledNav = styled.div`
display: flex;
justify-content: space-between;
`

class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                <div><Link to="/" >Home</Link></div>
                <div><Link to="/about" >About</Link></div>
                <div><Link to="/resume" >Resume</Link></div>
                <div><Link to="/project/1" >Project</Link></div>
            </StyledNav>
        );
    }
}

export default NavBar;