import React from 'react';
import PlaceList from '../components/place/placeList';
import Navbar from '../components/Navbar';

const Restaurants = () => {

    const categoryId = 2;

    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Restaurants</h1>
                <PlaceList categoryId={categoryId} />
            </div>
        </>
    );
};

export default Restaurants;