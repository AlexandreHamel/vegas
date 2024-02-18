import React from 'react';
import picVegas from '../styles/images/pic-vegas.jpg';
// import LeafletMap from '../components/LeafletMap';
import Navbar from '../components/Navbar';
import PlaceList from '../components/place/placeList';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='home-container'>

                    <img className='img-home' src={picVegas} alt="" />
                    <h1>Welcome to Las Vegas</h1>
                    <PlaceList />

                </div>

            </div>
        </>
    );
};

export default Home;