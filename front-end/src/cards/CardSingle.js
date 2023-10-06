import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CardSingle({ video, topic }) {
    return (
        <>
            <div className="card">
                <Link to={`/video/${topic}/${video.id}`}>
                    <img src={video.thumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title">{video.title}</h5>
                        <p className="card-text">
                            THis video is about: {video.desc}
                        </p>
                    </div>
                </Link>
                <footer className="card-footer">
                    <div class="dot-cont">
                        <span className="dot"></span>
                        <p>{video.length} min</p>
                    </div>
                    <div class="dot-cont">
                        <span className="dot"></span>
                        <p>{video.designation}</p>
                    </div>
                    {video.status === 'complete' ? (
                        <span class="badge rounded-pill text-bg-success">
                            Completed
                        </span>
                    ) : (
                        <span class="badge rounded-pill text-success">
                            Mark completed
                        </span>
                    )}
                </footer>
            </div>
        </>
    )
}

export default CardSingle
