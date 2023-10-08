import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../img/Logo.png'
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
                        <img src={logo} />
                        SkillSprint
                    </h1>
                </Link>
                {loggedIn ? (
                    <>
                        <button
                            type="button"
                            className="btn btn-outline-info me-2"
                        >
                            Help
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                        >
                            Log out
                        </button>
                    </>
                ) : (
                    <div>
                        <Link to="signin">
                            <button type="button" className="hLogIn">
                                Log In
                            </button>
                        </Link>
                        <button type="button" className="hSignUp">
                            Sign Up
                        </button>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Menu
