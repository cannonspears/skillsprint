import { useState } from 'react'
import './QuizForm.css'

export default function QuizForm({ quiz }) {
    const [selectedAnswers, setSelectedAnswers] = useState(
        new Array(4).fill(null)
    )

    if (!quiz) {
        return <p>Loading Quiz...</p>
    }

    const handleChange = (questionIndex, optionIndex) => {
        const newSelectedAnswers = [...selectedAnswers]
        newSelectedAnswers[questionIndex] = optionIndex
        setSelectedAnswers(newSelectedAnswers)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(selectedAnswers)
    }

    return (
        <>
            <p>Here's your quiz! Good luck....</p>
            <form onSubmit={handleSubmit} className="quizAnswers">
                <ul className="quizList">
                    {quiz.map((item, i) => {
                        return (
                            <li key={`question-${i}`}>
                                <b>
                                    Question {i + 1}: {item.question}
                                </b>
                                <div className="options">
                                    {item.options.map((option, optionIndex) => (
                                        <div
                                            key={`question-${i}-option-${optionIndex}`}
                                        >
                                            <input
                                                type="radio"
                                                id={`question-${i}-answer-${optionIndex}`}
                                                name={`question-${i}-answer`}
                                                checked={
                                                    selectedAnswers[i] ===
                                                    optionIndex
                                                }
                                                onChange={() =>
                                                    handleChange(i, optionIndex)
                                                }
                                            />
                                            <label
                                                htmlFor={`question-${i}-answer-${optionIndex}`}
                                            >
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button type="submit">Submit Quiz</button>
            </form>
        </>
    )
}
