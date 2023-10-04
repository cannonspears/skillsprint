import React from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Search.css'

function Search() {
    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        const searchTerm = e.target.search.value

        history.push(`/topic/${searchTerm}`)
    }

    return (
        <div className="searchContainer">
            <form name="search" onSubmit={submitHandler}>
                <div className="input-group">
                    <input type="search" id="search" className="form-control" />

                    <button type="submit" className="btn btn-primary">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search
