import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import cometPhoto from '../../assets/images/Comets.gif';
import API from '../../utils/API';
import Post from '../../components/Post';
import { createYoutubePost, createPost } from '../../utils/pageHelper';
import './style.css';

function Comets() {
  const [cometPhotos, setCometPhotos] = useState([]);
  const [cometYT, setCometsYT] = useState([]);
  const [imagePosts, setImagePosts] = useState([]);
  const [videoPosts, setVideoPosts] = useState([]);

  useEffect(() => {
    API.getAllPosts('Comets')
      .then((res) => {
        let sortedPosts = res.data.sort((a, b) => b.likes - a.likes)
        setImagePosts(sortedPosts.filter(post => post.videoLink == null))
        setVideoPosts(sortedPosts.filter(post => post.imageLink == null))
      })
      .catch((err) => console.error(err))

    API.getNASAComets()
      .then(res => setCometPhotos(res.data.collection.items.slice(0, 5).map(postData => createPost(postData, 'Comets'))))
      .catch(err => console.error(err))

    API.getYouTubeComets()
      .then(res => {
        setCometsYT(res.data.items.map(post => createYoutubePost(post, 'Comets')))
        console.log(res);
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="pageStyle">
      <Jumbotron
        className="jumbotronStyle"
        style={{ backgroundImage: `url(${cometPhoto})` }}
      >
        <h1 className="homepageHeader">Comets</h1>
      </Jumbotron>
      <Container>
        <Row>
          <p className="descriptionText">
            Comets are cosmic snowballs of frozen gases, rock and dust that
            orbit the Sun. When frozen, they are the size of a small town.
            When a comet's orbit brings it close to the Sun, it heats up and
            spews dust and gases into a giant glowing head larger than most
            planets. The dust and gases form a tail that stretches away from
            the Sun for millions of miles. There are likely billions of comets
            orbiting our Sun in the Kuiper Belt and even more distant Oort
            Cloud.
            </p>
        </Row>
        <Row>
          <Col>
            <Card>
              <ListGroup>
                {videoPosts.map((post) => {
                  return <Post props={post} isSaved={true}></Post>;
                })}
                {cometYT.map((photo) => {
                  return <Post props={photo} isSaved={false}></Post>
                })}

              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <ListGroup>
                {imagePosts.map((post) => {
                  return <Post props={post} isSaved={true}></Post>;
                })}
                {cometPhotos.map((photo) => {
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

export default Comets;
