import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Logout from './logout/logout';

const Navbar = () => {
    return (
        <div className='navigation'>
            <Logo />
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/hotels" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Hôtels-Casinos</li>
                </NavLink>
            </ul>
            <ul>
                <NavLink to="/admin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Admin</li>
                </NavLink>
                <NavLink to="/inscription" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Inscription</li>
                </NavLink>
                <NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Connexion</li>
                </NavLink>
                    <li><Logout /></li> 
            </ul>
        </div>
    );
};

export default Navbar;