import React from 'react';
import Navbar from '../components/Navbar';
import PlaceList from '../components/placeList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <PlaceList />
        </div>
    );
};

export default Home;