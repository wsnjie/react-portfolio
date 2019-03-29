import React, { Component } from 'react';
import Home from "./components/Home"
import Resume from "./components/Resume"
import About from "./components/About"
import ProjectGallery from "./components/ProjectGallery"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose";
import Navigation from './components/Navigation';

const StyledHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
align-content: center;
justify-content: center;
`
const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});


class App extends Component {
  render() {
    const homeComponent = () => {
      return (<StyledHome><Home /></StyledHome>)
    }
    return (
      <Route render={({ location }) => (
        <div>
          <Navigation></Navigation>
          <PoseGroup>

            <RoutesContainer key={location.pathname}>

              <Switch location={location}>
                <Route exact path="/" render={homeComponent} />
                <Route exact path="/about" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={ProjectGallery} />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </div>
      )} />
    );
  }
}

export default App;
