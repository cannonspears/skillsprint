import React, { useEffect, useState } from 'react'
import './CardsList.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CardSingle from './CardSingle'
import { fetchVideosByName } from '../utils/videosApi'

function CardsList(history) {
    const { topic } = useParams(0)
    const [videos, setVideos] = useState(null)
    let completedVideos = []
    async function getVideos(topic) {
        const videosFromAPI = await fetchVideosByName(topic)
        console.log('videosFromAPI')
        console.log(videosFromAPI)
        setVideos(videosFromAPI)
    }
    // If history is done loading, set an array of all completed video IDs
    if (history.history) {
        completedVideos = history.history.filter((obj) => obj.video_completed)
        completedVideos = completedVideos.map((obj) => obj.video_id)
        console.log('completedVideos')
        console.log(completedVideos)
    } else {
        console.log('No history')
    }

    useEffect(function () {
        getVideos(topic)
    }, [])

    return (
        <>
            <h2>{topic}</h2>
            <div className="m-3 cardsList">
                <br />
                {videos &&
                    videos.map((video, i) => {
                        if (
                            completedVideos.find(
                                (thisVideo) => thisVideo === video.video_id
                            )
                        ) {
                            video.completed = true
                        }
                        return (
                            <CardSingle video={video} topic={topic} key={i} />
                        )
                    })}
            </div>
        </>
    )
}

export default CardsList
