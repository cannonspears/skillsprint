import "./HistoryCard.css"

export default function HistoryCard({ item }) {
    console.log(item)

    return (
        <div className="historyCard">
            <div className="top">
                <div className="completionCircle">
                    <p>% complete</p>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
}