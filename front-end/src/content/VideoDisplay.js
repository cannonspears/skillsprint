import React from 'react'
import './VideoDisplay.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function VideoDisplay({ video }) {
    const { topic, videoId } = useParams()

    // temportary static video
    video = {
        id: { videoId: 'WXBA4eWskrc' },
        snippet: {
            title: 'The Philosophy of Time Management | Brad Aeon | TEDxConcordia',
            description:
                'You are going to die eventually. Will you fill whatever lifetime you have left with so-called time management techniques and ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/WXBA4eWskrc/default.jpg',
                    width: 120,
                    height: 90,
                },
            },
            channelTitle: 'TEDx Talks',
        },
    }
    return (
        <>
            <h5>My Skills | {topic}</h5>
            <h2>{video.snippet.title}</h2>

            <div class="videoWrapper">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?si=OeHbx8DAyvGXLNIh`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    )
}

export default VideoDisplay
