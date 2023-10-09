import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Routes from './Routes'
import { fetchUser } from '../utils/usersApi'
import './Layout.css'

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [activePage, setActivePage] = useState()

    useEffect(() => {
        async function getUser() {
            const apiData = await fetchUser(1)
            setUser(apiData)
        }

        getUser()
    }, [])

    return (
        <div className="container-fluid">
            <Menu loggedIn={loggedIn} user={user} activePage={activePage} />
            <div className="row h-100">
                <div className="col">
                    <Routes setLoggedIn={setLoggedIn} user={user} setActivePage={setActivePage}/>
                </div>
            </div>
        </div>
    )
}

export default Layout
