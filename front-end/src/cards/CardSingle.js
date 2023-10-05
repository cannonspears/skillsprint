import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CardSingle({ video }) {
    return (
        <Link to={video.destination}>
            <div className="card">
                <img src={video.thumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 class="card-title">{video.title}</h5>
                    <p className="card-text">{video.desc}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardSingle
