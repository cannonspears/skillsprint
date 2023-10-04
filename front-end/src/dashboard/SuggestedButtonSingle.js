import React from 'react'

function SuggestedButtonSingle({ topic }) {
    const handleSuggestedClick = function (e) {
        const searchBox = document.querySelector('#search')

        searchBox.value = e.target.textContent
    }

    return (
        <button
            data-toggle="tooltip"
            title="Hooray!"
            type="button"
            className="suggested btn btn-success"
            onClick={handleSuggestedClick}
        >
            {topic}
        </button>
    )
}

export default SuggestedButtonSingle
