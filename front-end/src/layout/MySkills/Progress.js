import HistoryCard from './HistoryCard'
import './Progress.css'

export default function Progress({ history }) {
    if (!history) {
        return <p>Loading Progress...</p>
    }

    return (
        <div className="progress">
            <ul className="items">
                {history.map((item) => {
                    return (
                        <li key={`historycard-${item.history_id}`}>
                            <HistoryCard item={item} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
