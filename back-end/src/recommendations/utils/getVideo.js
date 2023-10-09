require('dotenv').config()
const API_KEY = process.env.YOUTUBE_API_KEY

async function getVideo (skill) {
    const options = {
        method: 'GET'
    }
    const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${skill}&key=${API_KEY}&videoEmbeddable=true&type=video`
    const searchResponse = await fetch(searchUrl, options)
    const searchData = await searchResponse.json()
    const id = searchData.items[0].id.videoId
    const title = searchData.items[0].snippet.title
    const thumb = searchData.items[0].snippet.thumbnails.high.url
    const description = searchData.items[0].snippet.description
    const video = {
        id,
        title,
        thumb,
        description
    }
    return video
}

module.exports = getVideo