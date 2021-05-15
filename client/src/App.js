/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
// import Container from 'react-bootstrap/Container';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image'
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Stars from "./pages/Stars";
import Topic1 from "./pages/Stars";
import Topic2 from "./pages/Topics2";
import Topic3 from "./pages/Topics3";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" componenet={Homepage} />
            <Route exact path="/profile" componenet={Profile} />
            <Route exact path="/stars" componenet={Stars} />
            <Route exact path="/topic2" componenet={Topic2} />
            <Route exact path="/topic1" componenet={Topic1} />
            <Route exact path="/topic3" componenet={Topic3} />
            <Route componenet={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
