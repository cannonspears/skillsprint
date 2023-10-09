import React, { useState, useEffect } from 'react'
import './VideoDisplay.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchVideo } from '../utils/videosApi'
import Quiz from '../Quiz/Quiz'

function VideoDisplay() {
    const { topic, video_id } = useParams()

    const [video, setVideo] = useState(null)
    
    const getVideo = async (video_id) => {
        const videoFromApi = await fetchVideo(video_id)
        setVideo(videoFromApi)
    }

    useEffect(() => {
        getVideo(video_id)
    }, [])

    if (!video) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h5>{topic}</h5>
                        <h2>{video.title}</h2>

                        <div class="videoWrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video_id}?si=OeHbx8DAyvGXLNIh`}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        <Quiz />
        </>
    )
}

export default VideoDisplay
