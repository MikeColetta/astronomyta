import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import Comment from '../Comment'
import API from '../../utils/API'
import './style.css'
import moment from 'moment';

function Post(props) {
    const [likes, setLikes] = useState(0)
    const postData = props.props;

    useEffect(() => {   
        if(props.isSaved) {
            setLikes(postData.Likes)
        };

    },[])

    

    function onLike() {
        console.log({postData})
        if(props.isSaved) {
            API.updatePost(postData._id, {Likes: likes + 1})
                .catch((err) => console.error(err));
        }
        else {
        // let postInfo = p
         API.createPost(postData)
            .then() 
             .catch(err => console.error(err))
        }
        setLikes(likes + 1)
    }
    // Check content type
    let content
    if (props.props.imageLink) {
        content = <img className="imageStyle" src={props.props.imageLink}></img>
    }
    else if (props.props.videoLink) {
        let static_youtube_url = "https://www.youtube.com/embed/"
        let fullurl = static_youtube_url + props.props.videoLink
        content = <iframe src={fullurl} id="video_player" width="420" height="315" webkit-playsinline="true"
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
            <Card.Header>{props.props.title} {moment(props.props.date).format('MM/DD/YYYY')}</Card.Header>
            <Card.Body>
                {content}
                {comments}
                <Card.Text>{props.likes}</Card.Text>
                <Button variant='primary' data-index={props.props} onClick={() => onLike(props.props)}>Recommended: {likes} times!</Button>
            </Card.Body>
        </Card>
    )
}
export default Post