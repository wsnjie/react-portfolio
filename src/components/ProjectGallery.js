import React, { Component } from 'react';
import ProjectTile from './ProjectTile';
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import styled, { css } from "styled-components"
import simonimg from "../images/simon-desktop.png"
import squadimg from "../images/squadapp.png"
import festpackimg from "../images/festpack.png"

const StyledTitle = styled.h1`
color: #00A3A3;
text-align: center;
`

const StyledGallery = styled.div`
display: flex;
flex-direction: column;
align-content: space-around;
`
const width = '70vw', height = '75vh';
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  margin: 0 auto;
  display:flex;
  flex-direction: column;
`;
const Children = styled.div`

  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  padding:0px;
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  justify-self: center;
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
        <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>{'{'}</Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>{'}'}</Arrow>
        </Children>
        <Dots>
            {Array(...Array(total)).map((val, index) =>
                <Dot key={index} onClick={handleClick} data-position={index}>
                    {index === position ? '● ' : '○ '}
                </Dot>
            )}
        </Dots>
    </Container>)
const Carousel = makeCarousel(CarouselUI);

class ProjectGallery extends Component {
    state = {
        projects: [{
            name: "Simon",
            description: "A digital re-creation of the popular game. The player repeats the CPU's pattern and the CPU adds a new move each level.",
            highlights: ["Built using HTML, CSS, and JavaScript", "Utilizes object-oriented programming"],
            image: simonimg,
            deployment: "https://wsnjie.github.io/simon-game/",
            github: "https://github.com/wsnjie/simon-game"
        }, {
            name: "Squad App",
            description: "A schedule creation app to be used during multi-day events. Allows users to create schedules and compare them with other users",
            highlights: ["HTML, CSS, and JavaScript", "Node.js, Express, MongoDB and Mongoose"],
            image: squadimg,
            deployment: "https://evening-island-86988.herokuapp.com/",
            github: "https://github.com/wsnjie/squad-up"
        }, {
            name: "FestPack",
            description: "A packing list app that allows users to create a packing list for an event, mark items that still need to be purchased, then check off each item as it's packed.",
            highlights: ["HTML, CSS, and JavaScript", "Node.js, Express, MongoDB and Mongoose", "Client-side rendering with React"],
            image: festpackimg,
            deployment: "https://wsnjie.github.io/simon-game/",
            github: "https://fest-pack.herokuapp.com/"
        }]
    }
    render() {
        return (
            <StyledGallery>
                <StyledTitle>Projects</StyledTitle>
                <Carousel defaultWait={3000} maxTurns={6}>
                    {this.state.projects.map((project, i) => {
                        return (<Slide right key={i}><ProjectTile
                            key={i}
                            name={project.name}
                            description={project.description}
                            highlights={project.highlights}
                            image={project.image}
                        /></Slide>)
                    })}
                </Carousel>

            </StyledGallery>
        );
    }
}

export default ProjectGallery;