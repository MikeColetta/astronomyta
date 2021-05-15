import React, { Component } from 'react'

class NasaTwitter extends Component {

    componentDidMount() {
        const script = document.createElement('script')
        script.src = 'https://platform.twitter.com/widgets.js'
        script.async = true
        document.body.appendChild(scipt)
    }

    render() {
        <a class="twitter-timeline" 
            href="https://twitter.com/NASA?ref_src=twsrc%5Etfw"
            data-width="400"
            data-height="800"
            data-theme='dark'>
            Tweets by NASA
        </a> 
    }
}