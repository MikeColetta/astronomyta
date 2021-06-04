import React, { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'
import './style.css'
import moment from 'moment';

function Comment(props) {

    const [data, setData] = useState()

    useEffect(() => {
        console.log('loggin comment')
        console.log(props)
    })

    return (
        <Card>
            <Card.Body>
                <Card.Text className='text-muted'>{moment(props.props.date).format('MM/DD/YYYY')}</Card.Text>
                <Card.Text className='commentText'>{props.props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Comment