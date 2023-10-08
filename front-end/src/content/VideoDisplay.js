import React, { useState, useEffect } from 'react'
import './VideoDisplay.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchVideo } from '../utils/videosApi'

function VideoDisplay() {
    const { topic, videoId } = useParams()
    const [video, setVideo] = useState(null)
    const getVideo = async (video_id) => {
        const videoFromApi = await fetchVideo(video_id)
        setVideo(videoFromApi)
    }

    useEffect(function () {
        getVideo(videoId)
    }, [])

    return (
        <>
            {video ? <p>Video returned</p> : <p>Video not returned </p>}
            {/* <h5>My Skills | {topic}</h5>
            <h2>{video.snippet.title}</h2>

            <div class="videoWrapper">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?si=OeHbx8DAyvGXLNIh`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div> */}
        </>
    )
}

export default VideoDisplay
