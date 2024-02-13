import React from 'react';
import PlaceList from '../components/place/placeList';

const Restaurants = () => {

    const categoryId = 2;

    return (
        <>
            <div className='container'>
                <h1>Restaurants</h1>
                <PlaceList categoryId={categoryId} />
            </div>
        </>
    );
};

export default Restaurants;