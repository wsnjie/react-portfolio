import React, { Component } from 'react';
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Resume from "./components/Resume"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
