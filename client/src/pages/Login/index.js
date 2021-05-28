import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loginpic from '../../assets/images/Loginpic.jpg';
import { useHistory } from 'react-router';

function Profile({ authService }) {
  const history = useHistory();

  const onLogin = (event) => {
    // console.log(event.currentTarget.textContent);
    const test = authService //
      .login(event.currentTarget.textContent)
      .then((data) => history.push('/'));

    console.log(test);
  };

  return (
    <div>
      <Jumbotron
        className='jumbotronStyle'
        style={{ backgroundImage: `url(${Loginpic})` }}
      />
      <Container>
        <Row>
          <Card className='m-3' style={{ width: '25rem' }}>
            <Card.Header>Login</Card.Header>
            <Form className='m-3'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email Adress</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                ></Form.Control>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </Form>
          </Card>

          <Card className='m-3' style={{ width: '25rem' }}>
            <Card.Header>Create Account</Card.Header>
            <Form className='m-3'>
              <Form.Group controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Name'
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email Adress</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                ></Form.Control>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Sign Up
              </Button>
            </Form>
          </Card>
        </Row>
        <section>
          <h1>Login</h1>
          <button onClick={onLogin}>Google</button>
        </section>
      </Container>
    </div>
  );
}

export default Profile;
