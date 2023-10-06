import React, { useEffect, useState } from 'react'
import './CardsList.css'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CardSingle from './CardSingle'
import { fetchVideos } from '../utils/videosApi'

function CardsList() {
    const { topic } = useParams(0)
    // const videos = require('./videos.json')
    const [videos, setVideos] = useState([])
    async function loadVideos(topic) {
        console.log("in loadVideos")
        const result = await fetchVideos(topic)
        console.log('result')
        console.log(result)
        setVideos(result)
    }

    useEffect(function () {
        console.log('topic')
        console.log(topic)
        loadVideos(topic)
    }, [])

    return (
        <>
            <h2>{topic}</h2>
            <div className="m-3 cardsList">
                <br />
                {videos.map((video) => {
                    return <CardSingle video={video} topic={topic} />
                })}
            </div>
        </>
    )
}

export default CardsList
