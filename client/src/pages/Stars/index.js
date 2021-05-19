import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Stars() {
    return (
        <div>
            <Container>
                <Row>
                    <Card>
                        <h1>Stars</h1>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <p>
                        Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. 
                        The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy. 
                        Moreover, stars are responsible for the manufacture and distribution of heavy elements such as carbon, nitrogen, and oxygen, 
                        and their characteristics are intimately tied to the characteristics of the planetary systems that may coalesce about them. 
                        Consequently, the study of the birth, life, and death of stars is central to the field of astronomy.
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


export default Stars;