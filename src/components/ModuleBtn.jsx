import { Link } from "react-router-dom"
const ModuleBtn = ({ name, icon, url }) => {
    return (<>
        <Link to={url} className="flex flex-col items-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-950 dark:hover:bg-blue-900 text-white py-2 px-4 rounded">
            <div className="">{icon}</div>
            <div className="">{name}</div>
        </Link>
    </>)
}

export default ModuleBtn