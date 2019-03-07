import React, { Component } from 'react';
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons'


const StyledBlurb = styled.div`
color: #00A3A3;
`
const StyledContactBar = styled.div`
display: flex;
justify-content: space-around;
`

class About extends Component {
    render() {
        return (
            <div>
                <StyledBlurb>
                    <h3>
                        I am a fun and friendly web developer with a background in customer service and hospitality. Helping people is what motivates me to go work.
                            I’ve provided technical support both in-person and remotely for iOS and Mac devices which provided the opportunity to use technical knowledge to help others.
                            I have also worked for 8 years as both a server and bartender which helped me develop strong relationship and problem-solving skills.
                            I look forward to growing in the tech industry, building some cool projects, and having a little fun along the way!
                    </h3>
                    <br />
                    <p>Please feel free to contact me by email and check me out on LinkedIn, Github, Instagram, and Spotify!</p>
                </StyledBlurb>
                <StyledContactBar>
                    <SocialIcon url="mailto:wsnjie@gmail.com" bgColor="#FF0066" />
                    <SocialIcon url="https://www.linkedin.com/in/william-njie-94a4a321/" />
                    <SocialIcon url="https://github.com/wsnjie" />
                    <SocialIcon url="https://www.instagram.com/wsnjie/?hl=en" />
                    <SocialIcon url="https://open.spotify.com/user/omeganinja?si=vlrcFgUSTgyKT8dUOnOb4g" />
                </StyledContactBar>
            </div>
        );
    }
}

export default About;