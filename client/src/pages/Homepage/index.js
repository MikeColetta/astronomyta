import React, { useState } from "react"
import Jumbotron from 'react-bootstrap/Jumbotron';
import './homepage.css'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NasaTwitter from '../../components/NasaTwitter'
import API from '../../utils/API';

function Homepage() {
    const [apod, setApod] = useState();

    API.getNASAAPOD()
    .then(res => setApod(res.data.hdurl))
    .catch(err => console.error(err))

    return (
        <div>
            <Jumbotron className="jumbotronStyle" style={{backgroundImage: 'url(' + apod + ')'}}>
                <h1 className="homepageHeader">North Star!</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <NasaTwitter />
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

export default Homepage;