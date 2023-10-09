import { useState, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Completion from './Completion'
import SubMenu from './SubMenu'
import ToDo from './ToDo'
import Progress from './Progress'
import Completed from './Completed'
import './MySkills.css'
import { fetchAllVideos } from '../../utils/videosApi'

export default function MySkills({ user, history, setActivePage }) {
    const [allVideos, setAllVideos] = useState([])

    useEffect(() => {
        setActivePage('mySkills')
        async function getAllVideos() {
            const apiData = await fetchAllVideos()
            setAllVideos(apiData)
        }

        getAllVideos()
    }, [])

    const { url } = useRouteMatch()

    return (
        <div className="mySkills">
            <Completion user={user} history={history} />
            <SubMenu />
            <Switch>
                <Route path={`${url}/todo`}>
                    <ToDo />
                </Route>
                <Route path={`${url}/progress`}>
                    <Progress history={history} allVideos={allVideos} />
                </Route>
                <Route path={`${url}/completed`}>
                    <Completed history={history} allVideos={allVideos} />
                </Route>
            </Switch>
        </div>
    )
}
