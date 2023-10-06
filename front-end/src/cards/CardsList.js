import React from 'react'
import './CardsList.css'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CardSingle from './CardSingle'

function CardsList() {
    const { topic } = useParams(0)
    const videos = require('./videos.json')
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
