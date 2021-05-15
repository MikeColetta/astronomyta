import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./homepage.css" 

function Homepage() {
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">North Star</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#BlackHoles">Black Holes</Nav.Link>
                        <Nav.Link href="#Asteroids">Asteroids</Nav.Link>
                        <Nav.Link href="#Planets">Planets</Nav.Link>
                        <Nav.Link href="#Stars">Stars</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <Jumbotron>
                <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jpl.nasa.gov%2Fedu%2Fnews%2F2020%2F1%2F23%2Fnasa-says-goodbye-to-space-telescope-mission-that-revealed-a-hidden-universe%2F&psig=AOvVaw2eVOGyj7nCe0ZkWvWpdNKn&ust=1621051914756000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiUu46nyPACFQAAAAAdAAAAABAD" fluid />
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>This is the first row!</ListGroup.Item>
                                <ListGroup.Item>This is the second row!</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>This is the first row!</ListGroup.Item>
                                <ListGroup.Item>This is the second row!</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage;