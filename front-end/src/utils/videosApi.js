import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// API CALLS //
export async function fetchVideo(video_id) {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/videos/${video_id}`)
        return data
    } catch (error) {
        throw error
    }
}

export async function fetchVideos() {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/videos`)
        return data
    } catch (error) {
        throw error
    }
}
