import axios from 'axios';


export default {
    //Grabs a book from the Google API
    getNASAAPOD: function() {
        return axios.get(`GET https://api.nasa.gov/planetary/apod`)
    },    
    getNASAPlanets: function() {
        return axios.get(`GET https://images-api.nasa.gov/search?q=planets`)
    },
    getNASAAsteroids: function() {
        return axios.get(`GET https://images-api.nasa.gov/search?q=asteroids`)
    },
    getNASAStars: function() {
        return axios.get(`GET https://images-api.nasa.gov/search?q=stars`)
    },
    getNASAComets: function() {
        return axios.get(`GET https://images-api.nasa.gov/search?q=comets`)
    },
}

import dotenv from 'dotenv' 
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

