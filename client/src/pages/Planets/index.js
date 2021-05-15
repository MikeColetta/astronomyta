import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Planets() {
    return (
        <div>
            <Container>
                <Row>
                    <Card>
                        <h1>Planets</h1>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <p>
                            There are more planets than stars in our galaxy. The current count orbiting our star: eight.

                            The inner, rocky planets are Mercury, Venus, Earth and Mars. NASA's newest rover — Perseverance — landed on Mars on Feb. 18, 2021.
                            The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune.

                            Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite Pluto.
                            Thousands more planets have been discovered beyond our solar system. Scientists call them exoplanets (exo means "from outside.")
                        </p>
                    </Card>
                </Row>
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


export default Planets;