import React from 'react'

import { Link } from 'react-router-dom'
import sprinterLogo from '../img/sprinter-300.png'
import './Menu.css'

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu({ loggedIn }) {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <Link
                    to="/#"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                >
                    <h1>
                        <img src={sprinterLogo} />
                        SkillSprint
                    </h1>
                    
                </Link>
                {loggedIn ? (
                    <button
                        type="button"
                        className="btn btn-outline-primary me-2"
                    >
                        Log out
                    </button>
                ) : (
                    <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                        >
                            Register
                        </button>
                        <button type="button" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Menu
