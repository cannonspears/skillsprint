import { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import videosImg from '../../img/Videos.png'
import { revSkillMap } from '../../utils/skillMaps'
import { fetchVideosById } from '../../utils/videosApi'
import './HistoryCard.css'

export default function HistoryCard({ skill_id, completed }) {
    const [totalVideos, setTotalVideos] = useState(0)

    useEffect(() => {
        async function getVideosLength() {
            const apiData = await fetchVideosById(skill_id)
            setTotalVideos(apiData.length)
        }

        getVideosLength()
    }, [])

    const completionPercentage = (completed / totalVideos) * 100

    const { url } = useRouteMatch()
    if (url.includes('progress') && completionPercentage === 100) {
        return null
    }
    if (url.includes('completed') && completionPercentage !== 100) {
        return null
    }

    return (
        <div className="historyCard">
            <div className="top">
                <div className="completionCircle">
                    <p>{completionPercentage}%</p>
                    <p>complete</p>
                </div>
                <div className="info">
                    <p>{revSkillMap.get(skill_id)}</p>
                    <p>
                        Level:{' '}
                        {completionPercentage >= 0.5
                            ? 'Intermediate'
                            : 'Beginner'}
                    </p>
                </div>
            </div>
            <div className="bottom">
                <div className="points">
                    <img src={videosImg} alt=""></img>
                    {completed * 10}/{totalVideos * 10} Points
                </div>
                <div className="videos">
                    <img src={videosImg} alt=""></img>
                    {completed}/{totalVideos} Videos
                </div>
            </div>
        </div>
    )
}
