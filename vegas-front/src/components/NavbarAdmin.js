import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <>
            <nav className='navbar'>
                <h1>Dashboard</h1>
                <ul>
                    <Link className='link' to="/" ><li>Accueil</li></Link>
                    <Link className='link' to="/admin/place/list" ><li>Tous les lieux</li></Link>
                    <Link className='link' to="/admin/place/add" ><li>Ajouter un lieu</li></Link>
                    <Link className='link' to="/admin/category/list" ><li>Toutes les catégories</li></Link>
                    <Link className='link' to="/admin/category/add" ><li>Ajouter une catégorie</li></Link>
                </ul>
            </nav>
        </>
    );
};

export default NavbarAdmin;