import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import planetPhoto from '../../assets/images/Planet.gif';
import API from '../../utils/API';
import Post from '../../components/Post';
import { createYoutubePost, createPost } from '../../utils/pageHelper'
import './style.css';



function Planets(userId) {
  const [planetPhotos, setPlanetPhotos] = useState([]);
  const [planetsYT, setPlanetsYT] = useState([]);
  const [imagePosts, setImagePosts] = useState([]);
  const [videoPosts, setVideoPosts] = useState([]);


  useEffect(() => {
    API.getAllPosts('Planets')
      .then((res) => {
        let sortedPosts = res.data.sort((a, b) => b.likes - a.likes)
        setImagePosts(sortedPosts.filter(post => post.videoLink == null))
        setVideoPosts(sortedPosts.filter(post => post.imageLink == null))
      })
      .catch((err) => console.error(err))

    API.getNASAPlanets()
      .then(res => setPlanetPhotos(res.data.collection.items.slice(0, 10).map(postData => createPost(postData, 'Planets'))))
      .catch(err => console.error(err))

    API.getYouTubePlanets()
      .then(res => {
        setPlanetsYT(res.data.items.map(post => createYoutubePost(post, 'Planets')))
        console.log('\n\n\n\nRESPONSE');
        console.log(res);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="pageStyle">
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: `url(${planetPhoto})` }}
      >
        <h1 className="homepageHeader">Planets</h1>
      </Jumbotron>
      <Container>
      <Row>
          <p className="descriptionText">
            There are more planets than stars in our galaxy. The current count
            orbiting our star: eight. The inner, rocky planets are Mercury,
            Venus, Earth and Mars. NASA's newest rover ??? Perseverance ??? landed
            on Mars on Feb. 18, 2021. The outer planets are gas giants Jupiter
            and Saturn and ice giants Uranus and Neptune. Beyond Neptune, a
            newer class of smaller worlds called dwarf planets reign,
            including longtime favorite Pluto. Thousands more planets have
            been discovered beyond our solar system. Scientists call them
            exoplanets (exo means "from outside.")
            </p>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <ListGroup>
                {videoPosts.map((post) => {
                  return <Post props={post} isSaved={true} userId={userId}></Post>;
                })}
                {planetsYT.map((photo) => {
                  return <Post props={photo} isSaved={false} userId={userId}></Post>
                })}

              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <ListGroup>
                {imagePosts.map((post) => {
                  return <Post props={post} isSaved={true} userId={userId}></Post>;
                })}
                {planetPhotos.map((photo) => {
                  return <Post props={photo} isSaved={false} userId={userId}></Post>
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
