/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Stars from "./pages/Stars";
import Planets from "./pages/Planets";
import Comets from "./pages/Comets";
import Asteroids from './pages/Asteroids';
import NoMatch from "./pages/NoMatch";
import Nav from 'react-bootstrap/Nav';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">North Star</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/comets">Comets</Nav.Link>
                        <Nav.Link href="/asteroids">Asteroids</Nav.Link>
                        <Nav.Link href="/planets">Planets</Nav.Link>
                        <Nav.Link href="/stars">Stars</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/stars" component={Stars} />
            <Route exact path="/comets" component={Comets} />
            <Route exact path="/asteroids" component={Asteroids} />
            <Route exact path="/planets" component={Planets} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
