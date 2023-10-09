import './Completion.css'

import levelsImg from '../../img/Levels.png'
import pointsImg from '../../img/Points.png'
import skillsImg from '../../img/Skills.png'
import videosImg from '../../img/Videos.png'

function videosWatched(history) {
    return history.reduce((total, video) => {
        if (video.video_completed === true) {
            return total + 1
        } else {
            return total
        }
    }, 0)
}

export default function Completion({ user, history }) {
    if (!user || !history) {
        return <p>Loading...</p>
    }

    return (
        <div className="completion">
            <div className="completionItem">
                <img src={levelsImg} alt=""></img>
                <p>{user.user_level}</p>
                <p>Levels Gained</p>
            </div>
            <div className="completionItem">
                <img src={pointsImg} alt=""></img>
                <p>{user.user_points}</p>
                <p>Overall Points</p>
            </div>
            <div className="completionItem">
                <img src={skillsImg} alt=""></img>
                <p>{user.skills_completed}</p>
                <p>Skills Completed</p>
            </div>
            <div className="completionItem">
                <img src={videosImg} alt=""></img>
                <p>{videosWatched(history)}</p>
                <p>Videos Watched</p>
            </div>
        </div>
    )
}
