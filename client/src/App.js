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
  constructor(props) {
    super(props);
    this.state = { userId: null };
  }
  // state = { userId: null };

  checkAuth() {
    this.props.authService.onAuthChange((user) => {
      if (user) {
        this.setState({ userId: user.uid });
      }
    });
  }

  handleLogin = () => {
    this.props.authService //
      .login('Google');
  };

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
              
              </NavDropdown>
            </Nav>
            <Nav>
              {!this.state.userId && (
                <Nav.Link fixed='right' onClick={this.handleLogin}>
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
            <Route exact path='/'
              render= {() => (<Homepage userId={this.state.userId}/>
                )}
              />
            <Route exact path='/planets'
              render= {() => (<Planets userId={this.state.userId}/>
                )}
              />
            <Route exact path='/stars'
              render= {() => (<Stars userId={this.state.userId}/>
                )}
              />
              <Route exact path='/comets'
              render= {() => (<Comets userId={this.state.userId}/>
                )}
              />
              <Route exact path='/asteroids'
              render= {() => (<Asteroids userId={this.state.userId}/>
                )}
              />
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
