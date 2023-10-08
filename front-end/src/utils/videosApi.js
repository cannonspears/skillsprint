import axios from 'axios'
import { skillMap } from './skillMaps'

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

export async function fetchVideosByName(skillName = 'Time Management') {
    const skill = skillMap.get(skillName)

    try {
        const { data } = await axios.get(`${API_BASE_URL}/skills/${skill}`)
        return data
    } catch (error) {
        throw error
    }
}

export async function fetchVideosById(skill_id = 0) {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/skills/${skill_id}`)
        return data
    } catch (error) {
        throw error
    }
} 

export async function fetchAllVideos() {
    try {
        const allData = [];
        for (let i = 0; i < 24; i++) {
            const data  = await fetchVideosById(i)
            allData.push(data)
        }
        return allData
    } catch (error) {
        throw error
    }
}
