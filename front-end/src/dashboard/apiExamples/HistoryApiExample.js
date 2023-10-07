import { useState } from 'react'
import {
    fetchFullHistory,
    fetchSingleVidHistory,
    createHistory,
    updateHistory,
    deleteHistory,
} from '../../utils/historyApi'

export default function HistoryApiExample() {
    // Full Vid History

    const [fullHistory, setfullHistory] = useState(null)

    const handleGetFullHistory = async () => {
        const apiData = await fetchFullHistory(2)
        setfullHistory(apiData)
    }

    const handleCreateHistory = async () => {
        await createHistory({
            user_id: 2,
            video_id: 'LgUCyWhJf6s',
        })
        handleGetFullHistory()
    }

    const handleUpdateHistory = async () => {
        await updateHistory({
            user_id: 2,
            history_id: 36,
            video_completed: true,
        })
        handleGetFullHistory()
    }

    const handleDeleteHistory = async () => {
        await deleteHistory(2, 33)
        handleGetFullHistory()
    }

    if (!fullHistory) {
        return (
            <button onClick={handleGetFullHistory}>Get User 3 History</button>
        )
    }

    if (fullHistory.length === 0) {
        return (
            <>
                <button onClick={handleDeleteHistory}>
                    Delete History Item
                </button>
                <p>User has no videos in their history!</p>
            </>
        )
    }

    return (
        <>
            <button onClick={handleDeleteHistory}>Delete History Item</button>
            <ul>
                {fullHistory.map((item) => {
                    return (
                        <li>
                            <ul>
                                {Object.entries(item).map(([key, val]) => {
                                    return (
                                        <li>
                                            {key}:{' '}
                                            {typeof val === 'boolean'
                                                ? String(val)
                                                : val}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </>
    )

    // Single Vid History
    // const [singleVidHistory, setSingleVidHistory] = useState(null)
    // const handleGetSingleVidHistory = async (event) => {
    //     event.preventDefault()
    //     const apiData = await fetchSingleVidHistory(2, 3)
    //     setSingleVidHistory(apiData)
    // }
    //
    // if (!singleVidHistory) {
    //     return (
    //         <button onClick={handleGetSingleVidHistory}>
    //             Get User 2 Video 3 History
    //         </button>
    //     )
    // }
    //
    // return (
    //     <ul>
    //         {Object.entries(singleVidHistory).map(([key, val]) => {
    //             return (
    //                 <li>
    //                     {key}: {typeof val === 'boolean' ? String(val) : val}
    //                 </li>
    //             )
    //         })}
    //     </ul>
    // )
}
