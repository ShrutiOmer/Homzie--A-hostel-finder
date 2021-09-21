import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
                <nav className="navContainer">
                    <div className="navLinks">
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </div>
                    
                </nav>
        </div>
    )
}

export default Navbar
