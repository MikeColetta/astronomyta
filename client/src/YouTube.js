//fill with API key we make 
var api_key = ''
URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${youtubeSearch}&type=video&key=${api_key}`

const youtubeurl = fetch(URL)
// this is the same as .then(function(response){response.json()})
.then((response) => response.json())
.then((data) => {
    console.log(data.items[0].id.videoId);
    
    // Populate iframe
    static_youtube_url = "https://www.youtube.com/embed/"
    url = data.items[0].id.videoId
    fullurl = static_youtube_url+url

    $('#video_player').attr('src', fullurl)
})
.catch(err => { console.log(err);})