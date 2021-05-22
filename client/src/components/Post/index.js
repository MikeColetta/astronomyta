import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import Comment from '../Comment'
import API from '../../utils/API'

function Post(props) {

    const [likes, setLikes] = useState()

    useEffect(() => {
        setLikes()
    })

    function onLike() {
        setLikes(likes + 1)

        API.updateLikes()
            .catch(err => console.log(err))
    }

    // Check content type
    if (props.imageLink) {
        content = <img ref={props.imageLink}></img>
    }
    else if (props.videoLink) {
        content = <iframe src={props.videoLink} id="video_player" width="420" height="315" webkit-playsinline="true"
        playsinline="true"></iframe>
    } else {
        conte = <div></div>
    }

    // Check for comment
    if (props.comments) {
        comments = <div>
            {props.comments.map((comment) => {
                    <Comment props={comment}></Comment>
                })}
        </div>
    } else {
        comments = <div></div>
    }

    return (
        <Card>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text className='text-muted'>{props.date}</Card.Text>
                {content}
                {comments}
                <Card.Text>{props.likes}</Card.Text>
                <Button variant='primary' onClick={() => onLike()}>Like</Button>
                
            </Card.Body>
        </Card>
    )
}

export default Post