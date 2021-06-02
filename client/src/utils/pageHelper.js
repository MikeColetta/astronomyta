function createYoutubePost(postData) {
    return {
      title: postData.snippet.title,
      videoLink: postData.id.videoId,
      date: postData.snippet.publishedAt
    }
  }


  function createPost(postData, category) {
    return {
      title: postData.data[0].title,
      imageLink: postData.links[0].href,
      date: postData.data[0].date_created,
      category: category
    }
  }

export { createYoutubePost, createPost }