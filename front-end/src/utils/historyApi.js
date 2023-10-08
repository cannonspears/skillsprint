import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function fetchFullHistory(user_id) {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/users/${user_id}/history`
        )
        return data
    } catch (error) {
        throw error
    }
}

export async function fetchSingleVidHistory(user_id, video_id) {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/users/${user_id}/history/${video_id}`
        )
        return data
    } catch (error) {
        throw error
    }
}

// Make sure the history object passed in here has a user_id and a video_id.
// This should return an error if the user already has a history record for this video_id.
export async function createHistory(history) {
    const { user_id } = history

    try {
        const { data } = await axios.post(
            `${API_BASE_URL}/users/${user_id}/history/`,
            { data: history }
        )
        return data
    } catch (error) {
        throw error
    }
}

// Make sure the history object passed in here has a user_id, a history_id, and a video_completed.
export async function updateHistory(history) {
    const { user_id, history_id } = history

    try {
        const { data } = await axios.put(
            `${API_BASE_URL}/users/${user_id}/history/${history_id}`,
            { data: history }
        )
        return data
    } catch (error) {
        throw error
    }
}

export async function deleteHistory(user_id, history_id) {
    try {
        const { data } = await axios.delete(
            `${API_BASE_URL}/users/${user_id}/history/${history_id}`
        )
        return data.data
    } catch (error) {
        throw error
    }
}

// Stuff to calculate points //
export async function getUserPointsPerSkill(user_id = null, history = null) {
    if (!history) {
        var history = await fetchFullHistory(user_id)
    }

    const userPointsMap = new Map()

    history.forEach((item) => {
        const { skill_id, video_completed } = item
        if (userPointsMap.has(skill_id)) {
            if (video_completed) {
                userPointsMap.set(skill_id, userPointsMap.get(skill_id) + 10)
            }
        } else {
            userPointsMap.set(skill_id, 10)
        }
    })

    const userPoints = []

    for (let [key, value] of userPointsMap.entries()) {
        userPoints.push([key, value])
    }

    return userPoints
}
