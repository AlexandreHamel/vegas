import React from 'react';
import PlaceList from '../components/place/placeList';

const Shows = () => {

    const categoryId = 3;

    return (
        <>
            <div className='container'>
                <h1>Spectacles</h1>
                <PlaceList categoryId={categoryId} />
            </div>
        </>
    );
};

export default Shows;