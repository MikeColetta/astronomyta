import React, { useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './homepage.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NasaTwitter from '../../components/NasaTwitter';
import API from '../../utils/API';
import Post from '../../components/Post';
import { createYoutubePost, createPost } from '../../utils/pageHelper'


function Homepage(userId) {

  const [apod, setApod] = useState();
  const [nasaYT, setYouTube] = useState();
  const [nasaPhotos, setNasaPhotos] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  function getThumb(data) {
    function youtubeParser(url) {
      const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    }
    const videoID = youtubeParser(data.url);


    return `https://img.youtube.com/vi/${videoID}/0.jpg`;
  }


  useEffect(() => {
    //query database here
    API.getAllPosts('')
      .then((res) => {
        let sortedPosts = res.data.sort((a, b) => b.likes - a.likes )
        setLikedPosts(sortedPosts)
      })
      .catch((err) => console.error(err))

    API.getNASAAPOD()
      .then((res) => res.data)
      .then((data) => setApod(data.hdurl || getThumb(data)))
      .catch((err) => console.error(err));

    API.getYouTubeNASA()
      .then((res) => setYouTube(res.data.hdurl))
      .catch((err) => console.error(err));

    API.getNASAAstronomy()
      .then((res) =>
        setNasaPhotos(
          res.data.collection.items
            .slice(0, 10)
            .map((postData) => createPost(postData))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  function createPost(postData) {
    return {
      title: postData.data[0].title,
      imageLink: postData.links[0].href,
      date: postData.data[0].date_created,
    };
  }

  return (
    <div className='pageStyle'>
      <Jumbotron
        className='jumbotronStyle'
        style={{ backgroundImage: 'url(' + apod + ')' }}
      >
        <h1 className='homepageHeader'>North Star!</h1>
      </Jumbotron>
      <Container>
      <Row>
        <p className="descriptionText">
        Welcome to North Star! Visit our topic pages to start exploring resources and talking to other teachers! Be sure to come back everyday for some new content!
        <br></br>
        <br></br>
        Each topic page will have videos and photos provided by NASA (thanks to their API) to show real life examples. Like the videos and images that you think are interesting and they will be saved onto your profile so that they can be viewed at a later date and also seen by other teachers to help spread education about astronomy! Be sure to comment and leave feedback for the videos so that other teachers can quickly see helpful notes about them and engage in conversation.
        <br></br>
        <br></br>
        Be sure to create a profile and log in to save what looks interesting!
        </p>
        </Row>
      </Container>
      <Container fluid className='containerStyle'>
        <Row>
          <Col>
            <Card>
              <h3>Recently Recommended</h3>
              <ListGroup>
                {likedPosts.map((post) => {
                  return <Post props={post} isSaved={true} userId={userId}> </Post>;
                })}
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <h3>Astronomy from NASA</h3>
              <ListGroup>
                {nasaPhotos.map((photo) => {
                  return <Post props={photo} isSaved={false} userId={userId}></Post>;
                })}
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card className="twitterStyle">
              <NasaTwitter />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;