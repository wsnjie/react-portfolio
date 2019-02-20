import React, { Component } from 'react';
import ProjectTile from './ProjectTile';
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import styled, { css } from "styled-components"

const StyledGallery = styled.div`
display: flex;
flex-direction: column;
align-content: space-around;
`
const width = '70vw', height = '75vh';
const Container = styled.div`
  border: 1px solid black;
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
            highlights: ["Built using HTML, CSS, and JavaScript", "Utilizes object-oriented programming"]
        }, {
            name: "Squad App",
            description: "A schedule creation app to be used during multi-day events. Allows users to create schedules and compare them with other users",
            highlights: ["HTML, CSS, and JavaScript", "Node.js, Express, MongoDB and Mongoose"]
        }, {
            name: "FestPack",
            description: "A packing list app that allows users to create a packing list for an event, mark items that still need to be purchased, then check off each item as it's packed.",
            highlights: ["HTML, CSS, and JavaScript", "Node.js, Express, MongoDB and Mongoose", "Client-side rendering with React"]
        }]
    }
    render() {
        return (
            <StyledGallery>
                <h1>Projects</h1>
                <Carousel defaultWait={3000} maxTurns={6}>
                    {this.state.projects.map((project, i) => {
                        return (<Slide right key={i}><ProjectTile
                            key={i}
                            name={project.name}
                            description={project.description}
                            highlights={project.highlights}
                        /></Slide>)
                    })}
                </Carousel>

            </StyledGallery>
        );
    }
}

export default ProjectGallery;