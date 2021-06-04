import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, ListGroupItem, Col, Form} from 'react-bootstrap'
import Comment from '../Comment'
import API from '../../utils/API'
import './style.css'
import moment from 'moment';

function Post(props) {
    const [likes, setLikes] = useState(0)
    const postData = props.props;
    const commentInput = useRef(null)

    useEffect(() => {
        if (props.isSaved) {
            setLikes(postData.likes)
        };
    }, [])

    // Function for liking
    function onLike() {
        if (props.isSaved && props.userId.userId) {
            API.updatePost(postData._id, { likes: likes + 1 })
                .then(setLikes(likes + 1))
                .catch((err) => console.error(err));
        }
        else if (props.userId.userId){
            // let postInfo = p
            API.createPost(postData)
                .then(setLikes(likes + 1))
                .catch(err => console.error(err))
        }
        else{
            console.log('You need to login!')
        } 
    }

    // Function for commenting
    function onComment() {
        console.log(commentInput.current.value)
        let data = {
            text: commentInput.current.value,
            // userId: '123',
        }
        console.log(data)
        if (props.props._id) {
            console.log(props.props._id)
            console.log('Updated')
            API.updatePost(props.props._id, data)
                .catch(err => console.log(err))
        } else {
            console.log(props.props._id)
            console.log('Created')
            postData.comments = data
            API.createPost(postData)
                .then()
                .catch(err => console.error(err))
        }
    }

    // Check content type
    let content
    if (props.props.imageLink) {
        content = <img className="imageStyle" src={props.props.imageLink} alt={props.props.title}></img>
    }
    else if (props.props.videoLink) {
        let static_youtube_url = "https://www.youtube.com/embed/"
        let fullurl = static_youtube_url + props.props.videoLink
        content = <iframe src={fullurl} id="video_player" width="420" height="315"
            playsInline={true}></iframe>
    } else {
        content = <div></div>
    }
    // Check for comment
    let comments
    if (props.props.comments) {
        comments = (<div>
            {props.props.comments.map((comment) => {
                return (<Comment props={comment}></Comment>)
            })}
        </div>)
    } else {
        comments = <div></div>
    }
    return (
        <ListGroupItem key={props.props._id} className="listStyle">
            <Card className="cardStyle">
                <Card.Header>{props.props.title} {moment(props.props.date).format('MM/DD/YYYY')}</Card.Header>
                <Card.Body>
                    {content}
                    {comments}
                    <Card.Text>{props.likes}</Card.Text>
                    <Button className="buttonStyle" variant='primary' data-index={props.props} onClick={() => onLike(props.props)}>Recommended: {likes} times!</Button>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'#4e5861'}}>
                    <Form>
                        <Form.Row className='align-items-center'>
                            <Col xs='auto'>
                                <Form.Control
                                    className='mb-2'
                                    ref={commentInput}
                                    placeholder='Comment'
                                />
                            </Col>
                            <Col xs='auto'>
                                <Button
                                    type='button'

                                    className='mb-2 buttonStyle'
                                    onClick={() => onComment(props.props)}
                                >   
                                    Comment
                                </Button>

                            </Col>

                        </Form.Row>
                    </Form>
                </Card.Footer>
            </Card>
        </ListGroupItem>
    )
}
export default Post