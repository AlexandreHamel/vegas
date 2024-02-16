import React from 'react';
import PlaceList from '../components/place/placeList';
import Navbar from '../components/Navbar';

const Shows = () => {

    const categoryId = 3;

    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Spectacles</h1>
                <PlaceList categoryId={categoryId} />
            </div>
        </>
    );
};

export default Shows;