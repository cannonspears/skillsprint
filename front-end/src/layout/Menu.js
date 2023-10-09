import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import logo from '../img/Logo.png'
import './Menu.css'

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu({ loggedIn, activePage }) {
    const { url } = useRouteMatch()

    const skillsButton = (
        <button className={`${activePage === 'mySkills' ? 'active' : ''}`}>
            My Skills
        </button>
    )

    const exploreButton = (
        <button
            className={`${activePage === 'explore' ? 'active' : ''}`}
            type="button"
        >
            Explore
        </button>
    )

    return (
        <header>
            <h1>
                <img src={logo} alt="skillSprint" />
                <Link to="/explore">
                    <button>
                        <h1>SkillSprint</h1>
                    </button>
                </Link>
            </h1>

            {loggedIn ? (
                <>
                    <div className="hLinks">
                        <Link to="/myskills">{skillsButton}</Link>
                        <Link to="/explore">{exploreButton}</Link>
                    </div>
                    <div className="hUser">
                        <p className="userInitial">A</p>
                        <p>April Fools</p>
                    </div>
                </>
            ) : (
                <div>
                    <Link to="/signin">
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
    )
}

export default Menu
