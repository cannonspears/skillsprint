import { useRouteMatch } from 'react-router-dom'
import videosImg from '../../img/Videos.png'
import { revSkillMap } from '../../utils/skillMaps'
import './HistoryCard.css'

export default function HistoryCard({ history, skill_id, skillVideos }) {
    const { url } = useRouteMatch()

    if (!skillVideos) {
        return <p>Loading...</p>
    }

    let skillHistory = history.filter((item) => {
        return item.skill_id === skill_id
    })

    let completedVideos = skillHistory.filter((item) => {
        return item.video_completed
    })

    const completionPercentage =
        (completedVideos.length / skillVideos.length) * 100

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
                    {completedVideos.length * 10}/{skillVideos.length * 10}{' '}
                    Points
                </div>
                <div className="videos">
                    <img src={videosImg} alt=""></img>
                    {completedVideos.length}/{skillVideos.length} Videos
                </div>
            </div>
        </div>
    )
}
