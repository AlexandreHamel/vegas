import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Logout from './logout/logout';

const Navbar = ({ isLoggedIn }) => {

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
                <NavLink to="/restaurants" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Restaurants</li>
                </NavLink>
                <NavLink to="/spectacles" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Spectacles</li>
                </NavLink>
                <li><Logout /></li>
            </ul>
            <ul>
                {isLoggedIn ? (
                    <>
                        <NavLink to="/admin" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Admin</li>
                        </NavLink>
                        <li><Logout /></li>
                    </>

                ) : (
                    <>
                        <NavLink to="/inscription" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Inscription</li>
                        </NavLink>
                        <NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>Connexion</li>
                        </NavLink>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;