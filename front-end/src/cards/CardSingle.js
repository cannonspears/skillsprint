import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CardSingle({ video, topic }) {
    
    return (
        <>
            <div className="card">
                <Link
                    to={{
                        pathname: `/video/${topic}/${video.video_id}`,
                        state: {
                            completed: video.completed,
                        },
                    }}
                >
                    <img
                        src={video.thumbnailUrl}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{video.title}</h5>
                        <p className="card-text">{video.description}</p>
                    </div>
                </Link>
                <footer className="card-footer">
                    <div className="dot-cont">
                        <span className="dot"></span>
                        <p>XX min</p>
                    </div>

                    {video.completed ? (
                        <span className="badge rounded-pill text-bg-success">
                            Completed
                        </span>
                    ) : (
                        <i className="bi bi-plus-square-dotted addQueue"></i>
                    )}
                </footer>
            </div>
        </>
    )
}

export default CardSingle
