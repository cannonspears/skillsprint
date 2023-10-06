import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function fetchUserHistory(user_id) {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/users/${user_id}/history`
        )
        return data.data
    } catch (error) {
        throw error
    }
}

export async function fetchSingleVideoUserHistory(user_id, video_id) {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/users/${user_id}/history${video_id}`
        )
        return data.data
    } catch (error) {
        throw error
    }
}

export async function createHistory(history) {
    const { user_id } = history

    try {
        const { data } = await axios.post(
            `${API_BASE_URL}/users/${user_id}/history/`,
            history
        )
        return data.data
    } catch (error) {
        throw error
    }
}

export async function updateHistory(history) {
    const { user_id, history_id } = history

    try {
        const { data } = await axios.put(
            `${API_BASE_URL}/users/${user_id}/history/${history_id}`,
            history
        )
        return data.data
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
