import HistoryCard from './HistoryCard'
import './Progress.css'

export default function Progress({ history }) {
    if (!history) {
        return <p>Loading Progress...</p>
    }

    const skillMap = new Map()

    history.forEach((e) => {
        if (skillMap.has(e.skill_id)) {
            if (e.video_completed) {
                skillMap.set(e.skill_id, skillMap.get(e.skill_id) + 1)
            }
        } else {
            skillMap.set(e.skill_id, 0)
        }
    })

    const skillArray = []

    for (let [key, val] of skillMap.entries()) {
        skillArray.push([key, val])
    }

    return (
        <div className="progress">
            <ul className="items">
                {skillArray.map(([key, val]) => {
                    return (
                        <li key={`historycard-${key}`}>
                            <HistoryCard skill_id={key} completed={val} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
