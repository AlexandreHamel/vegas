import React from 'react';
import PlaceList from '../components/place/placeList';
import Navbar from '../components/Navbar';

const Hotels = () => {

    const categoryId = 1;

    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Hôtels-Casinos</h1>
                <PlaceList categoryId={categoryId} />
            </div>
        </>
    );
};

export default Hotels;