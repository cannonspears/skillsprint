import { Link, useRouteMatch } from 'react-router-dom'
import './SubMenu.css'

export default function SubMenu() {
    const { url } = useRouteMatch()

    return (
        <div className="subMenu">
            <Link to={`${url}/todo`}>
                <button>To Do</button>
            </Link>
            <Link to={`${url}/progress`}>
                <button>In Progress</button>
            </Link>
            <Link to={`${url}/completed`}>
                <button>Completed</button>
            </Link>
        </div>
    )
}
