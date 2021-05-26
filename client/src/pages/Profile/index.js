import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProfilePic from '../../assets/images/Loginpic.jpg';

function Profile() {
    return (
        <div className="pageStyle">
            <Jumbotron
      className="jumbotronStyle"
        style={{ backgroundImage: `url(${ProfilePic})` }}
      />
            <Container>

                <Row>
                    <Card>
                        <Card.Header>Recently Liked Videos</Card.Header>
                    </Card>
                </Row>

                <Row>
                    <Card>
                        <Card.Header>Recently Liked Images</Card.Header>
                    </Card>
                </Row>
                
                        

            </Container>
        </div>
    )
}

export default Profile;