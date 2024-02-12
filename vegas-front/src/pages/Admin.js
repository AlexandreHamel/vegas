import React from 'react';
import NewCategoryForm from '../components/category/categoryNew';
import { Link, Route, Routes } from 'react-router-dom';
import PlaceAdd from '../components/place/placeAdd';
import PlaceUpdate from '../components/place/placeUpdate';

const Admin = () => {
    return (
        <div className='container'>
            <h1>Dashboard - Admin</h1>
            <PlaceAdd />
            <NewCategoryForm />

            <nav>
                <ul>
                    <li><Link to="/admin/place/add" ></Link></li>
                    <li><Link to="/admin/place/update" ></Link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/admin/place/add" element={<PlaceAdd />} />
                <Route path="/admin/place/update" element={<PlaceUpdate />} />
            </Routes>

        </div>
    );
};

export default Admin;