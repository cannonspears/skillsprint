import { revSkillMap, skillImageMap } from '../../utils/skillMaps'
import './SkillCard.css'
import Length from '../../img/Length.png'
import Videos from '../../img/Videos.png'

function getSkillImage(skill_id) {
    return (
        <img
            src={skillImageMap.get(skill_id)}
            alt={revSkillMap.get(skill_id)}
        ></img>
    )
}

export default function SkillCard({ videos }) {
    const video = videos[0]

    const seconds = videos.reduce((total, { duration }) => {
        if (duration.indexOf('S')) {
            if (duration.indexOf('M'))
                return (
                    total +
                    parseInt(
                        duration.slice(
                            duration.indexOf('M') + 1,
                            duration.indexOf('S')
                        )
                    )
                )
        }
    }, 0)

    let minutes = videos.reduce((total, { duration }) => {
        if (duration.indexOf('M')) {
            return total + parseInt(duration.slice(0, duration.indexOf('M')))
        }
    }, 0)

    minutes += Math.floor(seconds / 60)

    return (
        <div className="skillCard">
            {getSkillImage(video.skill_id)}
            <div className="skillInfo">
                <h2>{revSkillMap.get(video.skill_id)}</h2>
                <p>Skill Description</p>
                <div className="cardBottom">
                    <div className="indicators">
                        <div className="vidIndicator">
                            <img src={Videos} alt="Total videos"></img>
                            <p>{videos.length} videos</p>
                        </div>
                        <div className="timeIndicator">
                            <img src={Length} alt="Total runtime"></img>
                            <p>{minutes} minutes</p>
                        </div>
                    </div>
                    <button>+ Add To My Skills</button>
                </div>
            </div>
        </div>
    )
}
