import React from "react";
import { NavLink } from 'react-router-dom';
function Header() {
    return(
        <header>
            <div className="header-box">
                <div className="header-left">
                    <span><i className="fas fa-align-left"></i></span>
                </div>
                <nav className='header_bar'>
                <div className="header_links">
                    <ul>
                        <NavLink to="/accueil">
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink to="/profil">
                            <li>Profil</li>
                        </NavLink>
                        <NavLink to="/login">
                            <li>Sign in</li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
                <div className="header-right">
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-user"></i></span>
                </div>
            </div>
        </header>
    );
}
export default Header;