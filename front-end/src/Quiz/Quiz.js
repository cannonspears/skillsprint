import { useState } from 'react'
import { formatTranscript } from '../utils/formatTranscript'

import './Quiz.css'

export default function Quiz() {
    const [formData, setFormData] = useState({ transcript: '' })

    const handleChange = (e) => {
        setFormData({
            transcript: e.target.value,
        })
    }

    const generateQuiz = async (e) => {
        e.preventDefault()
        console.log(formData)
        const formattedTranscript = formatTranscript(formData.transcript)
        console.log(formattedTranscript)
    }

    return (
        <div className="quizGenerator">
            <form onSubmit={generateQuiz}>
                <label htmlFor="transcript">Transcript</label>
                <input
                    type="text"
                    name="transcript"
                    id="transcript"
                    placeholder="Paste video transcript here!"
                    value={formData.transcript}
                    onChange={handleChange}
                ></input>
                <button type="submit">Generate Quiz</button>
            </form>
        </div>
    )
}
