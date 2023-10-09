import { useState } from 'react'
import './QuizForm.css'

function allAnswered(answers) {
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === null) {
            return false
        }
    }
    return true
}

export default function QuizForm({ quiz }) {
    const [selectedAnswers, setSelectedAnswers] = useState(
        new Array(4).fill(null)
    )

    const [submitted, setSubmitted] = useState(false)
    const [showAnswers, setShowAnswers] = useState(false)

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
        if (allAnswered(selectedAnswers)) {
            setShowAnswers(true)
        } else {
            alert('Please fill out all questions before submitting!')
        }
    }

    return (
        <>
            <p style={{ marginLeft: '2rem' }}>
                Here's your quiz! Good luck....
            </p>
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
                                {showAnswers ? (
                                    <div className="answer">
                                        <p>
                                            {selectedAnswers[i] ===
                                            item.answer ? (
                                                <p className="right">
                                                    Right answer!
                                                </p>
                                            ) : (
                                                <p className="wrong">
                                                    Wrong answer!
                                                </p>
                                            )}
                                        </p>
                                    </div>
                                ) : null}
                            </li>
                        )
                    })}
                </ul>
                {showAnswers ? null : (
                    <button type="submit">Submit Quiz</button>
                )}
            </form>
        </>
    )
}
