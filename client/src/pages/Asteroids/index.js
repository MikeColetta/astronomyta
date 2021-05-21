import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import AsteroidsImg from "../../Images/Mypicture.jpg";


function Asteroids() {
  return (
    <div>
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: AsteroidsImg }}
      >
        <h1 className="homepageHeader">North Star!</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Card>
            <h1>Asteroids</h1>
          </Card>
        </Row>
        <Row>
          <Card>
            <p>
              Asteroids, sometimes called minor planets, are rocky, airless
              remnants left over from the early formation of our solar system
              about 4.6 billion years ago. The current known asteroid count is:
              1,081,541. Most of this ancient space rubble can be found orbiting
              the Sun between Mars and Jupiter within the main asteroid belt.
              Asteroids range in size from Vesta — the largest at about 329
              miles (530 kilometers) in diameter — to bodies that are less than
              33 feet (10 meters) across. The total mass of all the asteroids
              combined is less than that of Earth's Moon.
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
  );
}

export default Asteroids;
