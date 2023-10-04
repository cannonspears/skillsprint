import React from 'react'

function SuggestedButtonSingle({ topic }) {
    return (
        <button
            data-toggle="tooltip"
            title="Hooray!"
            type="button"
            className="suggested btn btn-success"
        >
            {topic}
        </button>
    )
}

export default SuggestedButtonSingle
