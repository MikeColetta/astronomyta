import React, { useEffect, useState } from "react"
import Jumbotron from 'react-bootstrap/Jumbotron';
import './homepage.css'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NasaTwitter from '../../components/NasaTwitter'
import API from '../../utils/API';
import Post from '../../components/Post';

function Homepage() {
    const [apod, setApod] = useState();
    const [nasaYT, setYouTube] = useState();
    const [nasaPhotos, setNasaPhotos] = useState([]);

    useEffect(() => {
        API.getNASAAPOD()
            .then(res => setApod(res.data.hdurl))
            .catch(err => console.error(err))

        API.getYouTubeNASA()
            .then(res => setYouTube(res.data.hdurl))
            .catch(err => console.error(err))

        API.getNASAAstronomy()
            .then(res => setNasaPhotos(res.data.collection.items.slice(0, 5).map(postData => createPost(postData))))
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
        <div className="pageStyle">
            <Jumbotron className="jumbotronStyle" style={{backgroundImage: 'url(' + apod + ')'}}>
                <h1 className="homepageHeader">North Star!</h1>
            </Jumbotron>
            <Container className="containerStyle">
                <Row>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item className="thumbnail, listStyle" style={{video: 'url(' + nasaYT + ')'}}> </ListGroup.Item
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup>
                                {nasaPhotos.map((photo) => {
                                    return <Post props={photo}></Post>
                                })}

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