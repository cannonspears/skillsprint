import React, { useEffect, useState } from 'react'
import './CardsList.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CardSingle from './CardSingle'
import { fetchVideosByName } from '../utils/videosApi'

function CardsList() {
    const { topic } = useParams(0)
    const [videos, setVideos] = useState(null)
    async function getVideos(topic) {
        const videosFromAPI = await fetchVideosByName(topic)
        console.log('videosFromAPI')
        console.log(videosFromAPI)
        setVideos(videosFromAPI)
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
                    videos.map((video) => {
                        return <CardSingle video={video} topic={topic} />
                    })}
            </div>
        </>
    )
}

export default CardsList
