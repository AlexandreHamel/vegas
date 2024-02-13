import React from 'react';
import picVegas from '../styles/images/pic-vegas.jpg';
import LeafletMap from '../components/LeafletMap';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='home-container'>

                    <img className='img-home' src={picVegas} alt="" />
                    <h1>Welcome to Las Vegas</h1>

                    <LeafletMap />

                </div>

            </div>
        </>
    );
};

export default Home;