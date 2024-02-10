import React from 'react';
import Navbar from '../components/Navbar';
import NewPlaceForm from '../components/place/placeNew';
import NewCategoryForm from '../components/category/categoryNew';

const Admin = () => {
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <NewPlaceForm />
            <NewCategoryForm />
        </div>
    );
};

export default Admin;