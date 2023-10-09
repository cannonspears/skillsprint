import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function fetchQuiz(transcript) {
    console.log(transcript)

    try {
        const { data } = await axios.post(`${API_BASE_URL}/quizzes/generate`, {
            data: transcript,
        })
        return data
    } catch (e) {
        return e
    }
}
