import React from 'react';
import NewPlaceForm from '../components/place/placeNew';
import NewCategoryForm from '../components/category/categoryNew';

const Admin = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <NewPlaceForm />
            <NewCategoryForm />
        </div>
    );
};

export default Admin;