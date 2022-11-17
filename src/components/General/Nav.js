import {NavLink} from "react-router-dom";

const navLinks = ['Home', 'Popular', 'Battle'];

const Nav = () => {
    return (
    <ul className='nav'>
        {navLinks.map((navLink, index) => 
            <li key={index}>
                <NavLink end to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>{navLink}</NavLink>
            </li>
        )}
    </ul>
)}

export default Nav;