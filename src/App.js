import React, { Component } from 'react';
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Resume from "./components/Resume"
import About from "./components/About"
import ProjectGallery from "./components/ProjectGallery"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

const StyledHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
align-content: center;
justify-content: center;
`

class App extends Component {
  render() {
    const homeComponent = () => {
      return (<StyledHome><Home /></StyledHome>)
    }
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={homeComponent} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={ProjectGallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
