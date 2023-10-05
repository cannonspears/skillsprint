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
            <div className="text-center m-3 cardsList">
                <br />
                {videos.map((video) => {
                    ;<CardSingle video={video} />
                })}

                <Link to="#">
                    <div className="card">
                        <img
                            src="https://placehold.co/1280x720"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="#">
                    <div className="card">
                        <img
                            src="https://placehold.co/1280x720"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="#">
                    <div className="card">
                        <img
                            src="https://placehold.co/1280x720"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardsList
