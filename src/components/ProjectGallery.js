import React, { Component } from 'react';
import ProjectTile from './ProjectTile';

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
            <div>
                <h1>Projects</h1>
                {this.state.projects.map((project) => {
                    return <ProjectTile
                        name={project.name}
                        description={project.description}
                        highlights={project.highlights}
                    />
                })}
            </div>
        );
    }
}

export default ProjectGallery;