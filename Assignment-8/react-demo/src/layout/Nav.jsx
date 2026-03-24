import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav className="text-center py-4">
            <Link to="/">Intro</Link>
            <Link to="/event">Event</Link>
            <Link to="/calc">Calculator</Link>
        </nav>
    )
}

export default Nav