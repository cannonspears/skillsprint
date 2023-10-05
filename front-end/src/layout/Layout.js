import React from 'react'
import Menu from './Menu'
import Routes from './Routes'
import { useState } from 'react'

import './Layout.css'

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className="container-fluid">
            <Menu loggedIn={loggedIn} />
            <div className="row h-100">
                <div className="col">
                    <Routes setLoggedIn={setLoggedIn} />
                </div>
            </div>
        </div>
    )
}

export default Layout
