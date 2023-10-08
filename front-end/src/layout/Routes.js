import React from 'react'

import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import Splash from './Splash'
import Signin from './Signin'
import CardsList from '../cards/CardsList'
import VideoDisplay from '../content/VideoDisplay'
import Explore from './Explore/Explore'
import MySkills from './MySkills/MySkills'

/**
 * Defines all the routes for the application.
 * @returns {JSX.Element}
 */
function Routes({ setLoggedIn }) {
    return (
        <Switch>
            <Route exact={true} path="/">
                <Splash />
            </Route>
            <Route exact={true} path="/signin">
                <Signin setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/explore">
                <Explore />
            </Route>
            <Route path="/topic/:topic">
                <CardsList />
            </Route>
            <Route path="/video/:topic/:videoId">
                <VideoDisplay />
            </Route>
            <Route path="/myskills">
                <MySkills />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
