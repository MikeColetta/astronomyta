function createYoutubePost(postData, category) {
    return {
      title: postData.snippet.title,
      videoLink: postData.id.videoId,
      date: postData.snippet.publishedAt,
      category: category
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