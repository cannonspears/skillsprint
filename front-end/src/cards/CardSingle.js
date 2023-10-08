import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CardSingle({ video, topic }) {
    return (
        <>
            <div className="card">
                <Link to={`/video/${topic}/${video.video_id}`}>
                    <img src={video.thumbnailUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{video.title}</h5>
                        <p className="card-text">
                            {video.description}
                        </p>
                    </div>
                </Link>
                <footer className="card-footer">
                    <div className="dot-cont">
                        <span className="dot"></span>
                        <p>XX min</p>
                    </div>
                    <div className="dot-cont">
                        <span className="dot"></span>
                        <p>Beg.</p>
                    </div>
                    {video.status === 'complete' ? (
                        <span className="badge rounded-pill text-bg-success">
                            Completed
                        </span>
                    ) : (
                        <span className="badge rounded-pill text-success">
                            Mark completed
                        </span>
                    )}
                </footer>
            </div>
        </>
    )
}

export default CardSingle
