import React, { useState, useEffect } from 'react'
import './VideoDisplay.css'
import {
    useParams,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min'
import { fetchVideo } from '../utils/videosApi'
import { fetchSingleVidHistory, updateHistory } from '../utils/historyApi'

function VideoDisplay() {
    const { topic, videoId } = useParams()
    const [video, setVideo] = useState(null)
    const location = useLocation()
    const { completed } = location.state
    const [videoCompleted, setVideoCompleted] = useState(false)

    const getVideo = async (video_id) => {
        const videoFromApi = await fetchVideo(video_id)
        setVideo(videoFromApi)
    }

    async function markCompleted(videoId) {
        console.log('in markCompleted')
        const singleVidHistory = await fetchSingleVidHistory(1, videoId)
        console.log('singleVidHistory')
        console.log(singleVidHistory)
        singleVidHistory.video_completed = true
        const updatedHistory = await updateHistory(singleVidHistory)
        // completed = true
        console.log('updatedHistory')
        console.log(updatedHistory)
        setVideoCompleted(true)
    }

    useEffect(function () {
        getVideo(videoId)
        setVideoCompleted(completed)
    }, [])

    return (
        <>
            {video ? (
                <>
                    <div className="contentContainer">
                        <h5 className="skillTitle">My Skills | {topic}</h5>
                        <h2 className="videoTitle">{video.title}</h2>

                        <div className="videoContainer">
                            <div className="videoWrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?si=OeHbx8DAyvGXLNIh`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="infoArea">
                            {videoCompleted ? (
                                <button className="btn">
                                    You have completed this video
                                </button>
                            ) : (
                                <>
                                    <button
                                        className="btn"
                                        onClick={() => markCompleted(videoId)}
                                    >
                                        <i className="bi bi-check2-circle"></i>
                                        Mark completed
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <p>Video not returned </p>
            )}
        </>
    )
}

export default VideoDisplay
