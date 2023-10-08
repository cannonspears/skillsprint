import { useState, useEffect } from 'react'
import axios from 'axios'
import { searchVideos } from './searchVideos'

export default function VideoTimesGetter() {
    // State //
    const [videos, setVideos] = useState([])
    const [index, setIndex] = useState(0)

    const getVideo = async (videoId) => {
        const { data } = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=AIzaSyB3uccBu9FWtcdt8ajskQbZmWhCuwNYE8Q`
        )

        const video = data.items[0]
        const { id } = video
        const { duration } = video.contentDetails
        const videoInfo = {
            id,
            duration,
        }

        setVideos((prevVideos) => {
            return [...prevVideos, videoInfo]
        })
        // setIndex((index) => index + 1)
    }

    const handleGetVideo = async (e) => {
        getVideo(searchVideos[index].id.videoId)
        setIndex((prevIndex) => prevIndex + 1)
    }

    // JSX //
    return (
        <>
            <button onClick={handleGetVideo}>Get Video</button>
            <ul>
                {videos.map((video) => {
                    return (
                        <li>
                            <p>{video.id}</p>
                            <p>{video.duration}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
