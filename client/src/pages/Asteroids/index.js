import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import asteroidPhoto from '../../assets/images/Asteroid.gif';
import API from '../../utils/API';
import Post from '../../components/Post';
import { createYoutubePost, createPost } from '../../utils/pageHelper';
import './style.css';


function Asteroids(userId) {
  const [asteroidPhotos, setAsteroidPhotos] = useState([]);
  const [asteroidsYT, setAstroidsYT] = useState([]);
  const [imagePosts, setImagePosts] = useState([]);
  const [videoPosts, setVideoPosts] = useState([]);


  useEffect(() => {
    API.getAllPosts('Asteroids')
      .then((res) => {
        let sortedPosts = res.data.sort((a, b) => b.likes - a.likes)
        setImagePosts(sortedPosts.filter(post => post.videoLink == null))
        setVideoPosts(sortedPosts.filter(post => post.imageLink == null))
      })
      .catch((err) => console.error(err))

    API.getNASAAsteroids()
      .then(res => setAsteroidPhotos(res.data.collection.items.slice(0, 10).map(postData => createPost(postData, 'Asteroids'))))
      .catch(err => console.error(err))

    API.getYouTubeAstroids()
      .then(res => {
        setAstroidsYT(res.data.items.map(post => createYoutubePost(post, 'Asteroids')))
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="pageStyle">
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: `url(${asteroidPhoto})` }}
      >
        <h1 className="homepageHeader">Asteroids</h1>
      </Jumbotron>
      <Container>
        <Row>
          <p className="descriptionText">
            Asteroids, sometimes called minor planets, are rocky, airless
            remnants left over from the early formation of our solar system
            about 4.6 billion years ago. The current known asteroid count is:
            1,081,541. Most of this ancient space rubble can be found orbiting
            the Sun between Mars and Jupiter within the main asteroid belt.
            Asteroids range in size from Vesta ??? the largest at about 329
            miles (530 kilometers) in diameter ??? to bodies that are less than
            33 feet (10 meters) across. The total mass of all the asteroids
            combined is less than that of Earth's Moon.
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
                {asteroidsYT.map((photo) => {
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
                {asteroidPhotos.map((photo) => {
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

export default Asteroids;
