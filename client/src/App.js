/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Homepage from './pages/Homepage';
import Stars from './pages/Stars';
import Planets from './pages/Planets';
import Comets from './pages/Comets';
import Asteroids from './pages/Asteroids';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
require('dotenv').config();

class App extends Component {
  state = { userId: null };

  checkAuth() {
    this.props.authService.onAuthChange((user) => {
      if (user) {
        this.setState({ userId: user.uid });
      }
    });
  }

  handleLogout = () => {
    this.props.authService.logout();
    this.setState({ userId: null });
  };

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>North Star</Navbar.Brand>
            <Nav className='mr-auto'>
              <NavDropdown title='Resources'>
                <NavDropdown.Item href='/comets'>Comets</NavDropdown.Item>
                <NavDropdown.Item href='/asteroids'>Asteroids</NavDropdown.Item>
                <NavDropdown.Item href='/planets'>Planets</NavDropdown.Item>
                <NavDropdown.Item href='/stars'>Stars</NavDropdown.Item>
                {this.state.userId && (
                  <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              {!this.state.userId && (
                <Nav.Link fixed='right' href='/login'>
                  Login
                </Nav.Link>
              )}
              {this.state.userId && (
                <Nav.Link fixed='right' onClick={this.handleLogout}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/stars' component={Stars} />
            <Route exact path='/comets' component={Comets} />
            <Route exact path='/asteroids' component={Asteroids} />
            <Route exact path='/planets' component={Planets} />
            <Route
              exact
              path='/login'
              component={() => <Login authService={this.props.authService} />}
            ></Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
