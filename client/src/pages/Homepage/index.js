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
import Jumbotron from 'react-bootstrap/Jumbotron';

function Homepage() {
    const [apod, setApod] = useState();
    const [nasaYT, setYouTube] = useState();

    API.getNASAAPOD()
    .then(res => setApod(res.data.hdurl))
    .catch(err => console.error(err))
    
    API.getYouTubeNASA()
    .then(res => setYouTube(res.data.hdurl))
    .catch(err => console.error(err))

    return (
        <div>
            <Jumbotron className="jumbotronStyle" style={{backgroundImage: 'url(' + apod + ')'}}>
                <h1 className="homepageHeader">North Star!</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item className="thumbnail" style={{video: 'url(' + nasaYT + ')'}}> </ListGroup.Item>
                                
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
                    <Col>
                        <Card>
                            <NasaTwitter />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage;