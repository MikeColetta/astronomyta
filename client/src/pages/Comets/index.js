import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import CometImg from "../../Images/CometImg.jpg";

function Comets() {
  return (
    <div>
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: CometImg }}
      >
        <h1 className="homepageHeader">North Star!</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Card>
            <h1>Comets</h1>
          </Card>
        </Row>
        <Row>
          <Card>
            <p>
              Comets are cosmic snowballs of frozen gases, rock and dust that
              orbit the Sun. When frozen, they are the size of a small town.
              When a comet's orbit brings it close to the Sun, it heats up and
              spews dust and gases into a giant glowing head larger than most
              planets. The dust and gases form a tail that stretches away from
              the Sun for millions of miles. There are likely billions of comets
              orbiting our Sun in the Kuiper Belt and even more distant Oort
              Cloud.
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

export default Comets;
