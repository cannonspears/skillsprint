import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function fetchHistory(user_id) {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/users/3/history`)
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}
