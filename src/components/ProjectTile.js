import React, { Component } from 'react'


class ProjectTile extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                {this.props.highlights.map((highlight) => {
                    return <li>{highlight}</li>
                })}
            </div>
        );
    }
}

export default ProjectTile;