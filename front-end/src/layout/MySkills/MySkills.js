import { Route, Switch } from 'react-router-dom'
import Completion from './Completion'
import SubMenu from './SubMenu'
import ToDo from './ToDo'
import InProgress from './InProgress'
import Completed from './Completed'
import './MySkills.css'

export default function MySkills({ user, history }) {
    return (
        <div className="mySkills">
            <Completion user={user} history={history} />
            <SubMenu />
            <Switch>
                <Route path="/todo">
                    <ToDo />
                </Route>
                <Route path="/inprogress">
                    <InProgress />
                </Route>
                <Route path="completed">
                    <Completed />
                </Route>
            </Switch>
        </div>
    )
}
