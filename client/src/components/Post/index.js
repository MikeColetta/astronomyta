import React, {useState, useEffect} from React
import Card from 'react-bootstrap'
import Comment from '../Comment'

function Post(props) {

    useEffect(() => {

    })

    return (
        <Card>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <img ref={props.imageLink}></img>
                {props.comments.map((comment) => {
                    <Comment props={comment}></Comment>
                })}
            </Card.Body>
        </Card>
    )
}

export default Post