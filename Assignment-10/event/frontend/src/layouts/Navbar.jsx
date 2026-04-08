import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useAuth } from "../context/AuthContext";
import axiosClient from "../../apiClient";
function Navbar(){
    const navigate = useNavigate();
    const searchKeyRef = useRef(null);
    const { user, logout } = useAuth()

    function handleSearch(e){
        e.preventDefault();
        let searchKey = searchKeyRef.current.value
        console.log(searchKey)
        navigate(`/event/search/${searchKey}`)
    }
    async function handleLogout(){
        try {
            let res = await axiosClient.get("/users/logout")
            console.log(res)
            logout();
        } catch (error) {
            console.log(error.response)
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Campus Events</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {
                        user ? (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-event">Add Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLogout}>Log Out</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" >Welcome, {user.name}</span>
                        </li>
                        </>
                        ) : (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        </>
                        )
                    }
                    
                    
                </ul>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input ref={searchKeyRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">🔍</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar