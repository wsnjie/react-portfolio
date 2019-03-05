import React, { Component } from 'react'
import styled from "styled-components"

const StyledTile = styled.div`
padding: 30px;
margin: 0 40px 0 40px;
background: radial-gradient(#D7FFF1,#DBE4EE);
  @media (max-width: 450px) {
    margin: auto;
  }
`

const StyledPic = styled.image`
display: flex;
justify-content: center;

img {
width:40vw;
height:30vh;
object-fit: contain;
}

`


class ProjectTile extends Component {
    render() {
        return (
            <div>
                <StyledTile>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                    {this.props.highlights.map((highlight) => {
                        return <li>{highlight}</li>
                    })}
                    <StyledPic><img src={this.props.image} alt="project" /></StyledPic>
                </StyledTile>
            </div>
        );
    }
}

export default ProjectTile;