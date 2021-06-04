import React, { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'

function Comment(props) {

    const [data, setData] = useState()

    useEffect(() => {
        console.log(props)
    })



    return (
        <Card>
            <Card.Body>
                {/* <Card.Text className='text-muted'>{props.props.date}</Card.Text> */}
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Comment