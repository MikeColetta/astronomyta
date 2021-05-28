import axios from 'axios';
require('dotenv').config()
const REACT_APP_NASA_API = process.env.REACT_APP_NASA_API;
const REACT_APP_YOUTUBE_API_KEY =process.env.REACT_APP_YOUTUBE_API_KEY;


export default {
    //Grabs a book from the Google API
    getNASAAPOD: function() {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API}`)
    },
    getNASAAstronomy: function() {
        return axios.get(`https://images-api.nasa.gov/search?q=astronomy`)
    },    
    getNASAPlanets: function() {
        return axios.get(`https://images-api.nasa.gov/search?q=planets`)
    },
    getNASAAsteroids: function() {
        return axios.get(`https://images-api.nasa.gov/search?q=asteroids`)
    },
    getNASAStars: function() {
        return axios.get(`https://images-api.nasa.gov/search?q=stars`)
    },
    getNASAComets: function() {
        return axios.get(`https://images-api.nasa.gov/search?q=comets`)
    },
    getYouTubeNASA: function() {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=nasa&type=video&key=${ REACT_APP_YOUTUBE_API_KEY }`)
        
    },
    getYouTubeComets: function() {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=comets&type=video&key=${ REACT_APP_YOUTUBE_API_KEY }`)
    },
    getYouTubeAstroids: function() {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=astroids&type=video&key=${ REACT_APP_YOUTUBE_API_KEY }`)
    },
    getYouTubePlanets: function() {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=planets&type=video&key=${ REACT_APP_YOUTUBE_API_KEY }`)
    },
    getYouTubeStars: function() {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=stars+astronomy&type=video&key=${ REACT_APP_YOUTUBE_API_KEY }`)
    },
    createPosts: function() {

    }    
}

