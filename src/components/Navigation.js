import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Navbar, NavbarItem } from "bloomer"
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu';
import { NavbarStart } from 'bloomer/lib/components/Navbar/NavbarStart';
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand';

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

class Navigation extends Component {
    render() {
        return (
            <Navbar isTransparent style={{ backgroundColor: 'transparent' }} >
                <StyledNav>
                    <NavbarItem isHoverable><StyledNavButton><Link to="/" >Home</Link></StyledNavButton></NavbarItem>
                    <NavbarItem><StyledNavButton><Link to="/about" >About</Link></StyledNavButton></NavbarItem>
                    <NavbarItem><StyledNavButton><Link to="/projects" >Projects</Link></StyledNavButton ></NavbarItem>
                    <NavbarItem><StyledNavButton><Link to="/resume" >Resume</Link></StyledNavButton ></NavbarItem>
                </StyledNav>
            </Navbar>

            // <StyledNav>
            //     <StyledNavButton><Link to="/" >Home</Link></StyledNavButton>
            //     <StyledNavButton><Link to="/about" >About</Link></StyledNavButton>
            //     <StyledNavButton><Link to="/projects" >Projects</Link></StyledNavButton >
            //     <StyledNavButton><Link to="/resume" >Resume</Link></StyledNavButton >
            // </StyledNav >
        );
    }
}

export default Navigation;