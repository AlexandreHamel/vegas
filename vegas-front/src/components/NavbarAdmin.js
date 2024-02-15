import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <>
            <nav className='navbar'>
                <h1>Dashboard</h1>
                <ul>
                    <Link className='link' to="/" ><li>Home</li></Link>
                    <Link className='link' to="/admin/place/list" ><li>All Places</li></Link>
                    <Link className='link' to="/admin/place/add" ><li>Add Place</li></Link>
                    <Link className='link' to="/admin/category/list" ><li>All Categories</li></Link>
                    <Link className='link' to="/admin/category/add" ><li>Add Category</li></Link>
                    <li></li>
                </ul>
            </nav>
        </>
    );
};

export default NavbarAdmin;