import React from 'react'
import './SuggestedButtons.css'
import SuggestedButtonSingle from './SuggestedButtonSingle'

function SuggestedButtons() {
    const suggestedTopics = require('./SuggestedTopics.json')

    return (
        <div className="text-center m-3">
            {suggestedTopics.map((topic, index) => (
                <SuggestedButtonSingle topic={topic.topic} key={index} />
            ))}
        </div>
    )
}

export default SuggestedButtons
