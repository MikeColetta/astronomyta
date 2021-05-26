import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import planetPhoto from '../../assets/images/Neptune.jpg';
import API from '../../utils/API';
import Post from '../../components/Post';


function Planets() {
  const [planetPhotos, setPlanetPhotos] = useState([]);
  const [planetsYT, setPlanetsYT] = useState();

  useEffect(() => {
    API.getNASAPlanets()
      .then(res => setPlanetPhotos(res.data.collection.items.slice(0, 5).map(postData => createPost(postData))))
      .catch(err => console.error(err))

    API.getYouTubePlanets()
      .then(res => setPlanetsYT(res.data.hdurl))
      .catch(err => console.error(err))
  }, [])

  function createPost(postData) {
    return {
      title: postData.data[0].title,
      imageLink: postData.links[0].href,
      date: postData.data[0].date_created
    }
  }

  return (
    <div>
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: `url(${planetPhoto})` }}
      >
        <h1 className="homepageHeader">Planets</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Card>
            <h1>Planets</h1>
          </Card>
        </Row>
        <Row>
          <Card>
            <p>
              There are more planets than stars in our galaxy. The current count
              orbiting our star: eight. The inner, rocky planets are Mercury,
              Venus, Earth and Mars. NASA's newest rover — Perseverance — landed
              on Mars on Feb. 18, 2021. The outer planets are gas giants Jupiter
              and Saturn and ice giants Uranus and Neptune. Beyond Neptune, a
              newer class of smaller worlds called dwarf planets reign,
              including longtime favorite Pluto. Thousands more planets have
              been discovered beyond our solar system. Scientists call them
              exoplanets (exo means "from outside.")
            </p>
          </Card>
        </Row>
        <Row>
          <Col>
            <Card>
              <ListGroup>
                <ListGroup.Item className="thumbnail" style={{ iframe: 'url(' + planetsYT + ')' }}> </ListGroup.Item>

                <ListGroup.Item>This is the second row!</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <ListGroup>
                {planetPhotos.map((photo) => {
                  return <Post props={photo}></Post>
                })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Planets;
