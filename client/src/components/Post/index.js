import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import Comment from '../Comment'
import API from '../../utils/API'
import './style.css'

function Post(props) {
        
    const [likes, setLikes] = useState()

     useEffect(() => {      
    },[])

    function onLike() {
        setLikes(likes + 1)

        API.updateLikes()
            .catch(err => console.log(err))
    }

    // Check content type

    let content
    if (props.props.imageLink) {
        content = <img className="imageStyle" src={props.props.imageLink}></img>
    }
    else if (props.props.videoLink) {
        content = <iframe src={props.props.videoLink} id="video_player" width="420" height="315" webkit-playsinline="true"
        playsinline="true"></iframe>
    } else {
        content = <div></div>
    }

    // Check for comment
    let comments
    if (props.props.comments) {
        comments = <div>
            {props.comments.map((comment) => {
                    return (<Comment props={comment}></Comment>)
                })}
        </div>
    } else {
        comments = <div></div>
    }

    return (
        <Card className="cardStyle">
            <Card.Header>{props.props.title} {props.props.date}</Card.Header>
            <Card.Body>
                {content}
                {comments}
                <Card.Text>{props.likes}</Card.Text>
                <Button variant='primary' onClick={() => onLike()}>Like</Button>
            </Card.Body>
        </Card>
    )
}

export default Post