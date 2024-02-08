import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

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
                <NavLink to="" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Inscription</li>
                </NavLink>
                <NavLink to="" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Connexion</li>
                </NavLink>
                <NavLink to="" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Déconnexion</li>
                </NavLink>  
            </ul>
        </div>
    );
};

export default Navbar;