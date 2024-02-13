import React from 'react';
import PlaceList from '../components/place/placeList';

const Hotels = () => {

    const categoryId = 1;

    return (
        <>
            <div className='container'>
                <h1>Hôtels-Casinos</h1>
                <PlaceList categoryId={categoryId} />
            </div>
        </>
    );
};

export default Hotels;