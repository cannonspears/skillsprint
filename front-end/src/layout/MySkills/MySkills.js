import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Completion from './Completion'
import SubMenu from './SubMenu'
import ToDo from './ToDo'
import Progress from './Progress'
import Completed from './Completed'
import './MySkills.css'

export default function MySkills({ user, history }) {
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
                    <Progress history={history} />
                </Route>
                <Route path={`${url}/completed`}>
                    <Completed history={history} />
                </Route>
            </Switch>
        </div>
    )
}
