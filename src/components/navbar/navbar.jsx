import { NavLink } from "react-router-dom";
import './navbar.css';

export const NavBar = () => {

    return (
        <>
            <nav className="navbar">
                <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/'> Search </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/favorites'>Favorites</NavLink>
            </nav>

        </>
    )
}