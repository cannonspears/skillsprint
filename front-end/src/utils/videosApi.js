import axios from 'axios'
import { skills } from './skills'

for (let [key, value] of skills) {
    console.log(key, value)
}

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

export async function fetchVideos(skillName = 'Time Management') {
    const skill = skills.get(skillName)

    try {
        const { data } = await axios.get(`${API_BASE_URL}/skills/${skill}`)
        return data.data
    } catch (error) {
        throw error
    }
}
