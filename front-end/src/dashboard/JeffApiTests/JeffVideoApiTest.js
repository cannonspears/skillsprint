import { useState, useEffect } from 'react'
import { fetchVideo, fetchVideos } from '../../utils/videosApi'

export default function JeffApiTest() {
    const [video, setVideo] = useState(null)
    const getVideo = async (e) => {
        e.preventDefault()
        const video_id = e.target.value
        const videoFromApi = await fetchVideo(video_id)
        setVideo(videoFromApi)
    }

    const [videos, setVideos] = useState(null)
    const getVideos = async (e) => {
        e.preventDefault()
        const videosFromApi = await fetchVideos()
        setVideos(videosFromApi)
    }

    return (
        <div>
            <button onClick={getVideo} value={'WXBA4eWskrc'}>
                Fetch Video
            </button>
            {video && Object.values(video).map((val) => <p>{val}</p>)}
            <hr />
            <button onClick={getVideos}>Fetch Videos</button>
            {videos &&
                videos.map((video) => {
                    return (
                        <li key={video.video_id}>
                            <h1>{video.title}</h1>
                        </li>
                    )
                })}
        </div>
    )
}
