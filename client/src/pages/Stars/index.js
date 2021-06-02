import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import starPhoto from '../../assets/images/Stars.gif';
import API from '../../utils/API';
import Post from '../../components/Post';
import { createYoutubePost, createPost } from '../../utils/pageHelper'
import './style.css';


function Stars() {
  const [starPhotos, setStarPhotos] = useState([]);
  const [starsYT, setStarsYT] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);


  useEffect(() => {
    API.getAllPosts('Stars')
      .then((res) => {
        let sortedPosts = res.data.sort((a, b) => b.likes - a.likes)
        setLikedPosts(sortedPosts)
      })
      .catch((err) => console.error(err))

    API.getNASAStars()
      .then(res => setStarPhotos(res.data.collection.items.slice(0, 5).map(postData => createPost(postData, 'Stars'))))
      .catch(err => console.error(err))

    API.getYouTubeStars()
      .then(res => setStarsYT(res.data.items.map(post => createYoutubePost(post, 'Stars'))))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="pageStyle">
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: `url(${starPhoto})` }}
      >
        <h1 className="homepageHeader">Stars</h1>
      </Jumbotron>
      <Container>
        <Row>
          <p className="descriptionText">
            Stars are the most widely recognized astronomical objects, and
            represent the most fundamental building blocks of galaxies. The
            age, distribution, and composition of the stars in a galaxy trace
            the history, dynamics, and evolution of that galaxy. Moreover,
            stars are responsible for the manufacture and distribution of
            heavy elements such as carbon, nitrogen, and oxygen, and their
            characteristics are intimately tied to the characteristics of the
            planetary systems that may coalesce about them. Consequently, the
            study of the birth, life, and death of stars is central to the
            field of astronomy.
            </p>
        </Row>
        <Row>
          <Col>
            <Card>
              <ListGroup>
                {likedPosts.map((post) => {
                  return <Post props={post} isSaved={true}></Post>;
                })}
                {starsYT.map((photo) => {
                  return <Post props={photo} isSaved={false}></Post>
                })}

              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <ListGroup>
                {likedPosts.map((post) => {
                  return <Post props={post} isSaved={true}></Post>;
                })}
                {starPhotos.map((photo) => {
                  return <Post props={photo} isSaved={false}></Post>
                })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Stars;
