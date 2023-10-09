import HistoryCard from './HistoryCard'
import './Progress.css'

export default function Progress({ history, allVideos }) {
    if (!history) {
        return <p>Loading Progress...</p>
    }

    return (
        <div className="progress">
            <ul className="items">
                {allVideos.map((arr) => {
                    return (
                        <li key={`historycard-${arr[0].skill_id}`}>
                            <HistoryCard
                                history={history}
                                skill_id={arr[0].skill_id}
                                skillVideos={arr}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
