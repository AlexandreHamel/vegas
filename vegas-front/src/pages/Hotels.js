import React from 'react';
import Navbar from '../components/Navbar';
import PlaceList from '../components/place/placeList';

const Hotels = () => {
    return (
        <div>
            <Navbar />
            <h1>Hôtels-Casinos</h1>
            <PlaceList />
        </div>
    );
};

export default Hotels;