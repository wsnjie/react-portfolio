import React, { Component } from 'react';
import ProjectGallery from "./ProjectGallery"

class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <p>About Me Blurb</p>
                </div>
                <div>
                    <ProjectGallery />

                </div>
            </div >
        );
    }
}

export default Home;