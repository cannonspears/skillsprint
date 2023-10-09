import { useState } from 'react'
import { formatTranscript } from '../utils/formatTranscript'
import { fetchQuiz } from '../utils/quizApi'
import QuizForm from './QuizForm'
import './Quiz.css'

export default function Quiz() {
    const [formData, setFormData] = useState({ transcript: '' })
    const [quizData, setQuizData] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            transcript: e.target.value,
        })
    }

    const generateQuiz = async (e) => {
        e.preventDefault()
        setSubmitted(true)
        const formattedTranscript = formatTranscript(formData.transcript)
        const apiData = await fetchQuiz(formattedTranscript)
        setQuizData(apiData)
    }

    return (
        <>
            {quizData ? (
                <QuizForm quiz={quizData} />
            ) : (
                <>
                    <form onSubmit={generateQuiz} className="quizGenerator">
                        <label htmlFor="transcript">
                            Ready to test your knowledge? Use the field below to
                            generate a quiz based on this video's content using
                            the power of artificial intelligence! Don't worry
                            about deleting the timestamps; we'll take care of
                            that!
                        </label>
                        <textarea
                            name="transcript"
                            id="transcript"
                            placeholder="Paste video transcript here!"
                            value={formData.transcript}
                            onChange={handleChange}
                            rows="5"
                        ></textarea>
                        <button type="submit">Generate Quiz</button>
                    </form>
                    {submitted ? <p>Generating Quiz...</p> : null}
                </>
            )}
        </>
    )
}
