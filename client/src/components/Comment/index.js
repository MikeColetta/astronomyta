import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap'

function Comment(props) {

    const [data, setData] = useState()

    useEffect(() => {

    })



    return (
        <Card>
            <Card.Header>{props.user}</Card.Header>
            <Card.Body>
                <Card.Text className='text-muted'>{props.date}</Card.Text>
                <Card.Text>{props.comment}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Comment