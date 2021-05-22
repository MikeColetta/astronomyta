import React, {useState, useEffect} from React
import { Card, Button } from 'react-bootstrap'
import Comment from '../Comment'

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

    return (
        <Card>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text className='text-muted'>{props.date}</Card.Text>
                <img ref={props.imageLink}></img>
                <Card.Text>{props.likes}</Card.Text>
                <Button variant='primary' onClick={() => onLike()}>Like</Button>
                {props.comments.map((comment) => {
                    <Comment props={comment}></Comment>
                })}
            </Card.Body>
        </Card>
    )
}

export default Post