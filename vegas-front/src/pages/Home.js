import React from 'react';
import picVegas from '../styles/images/pic-vegas.jpg'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='home-container'>
                    
                    <img className='img-home' src={ picVegas} alt="" />
                    <h1>Welcome to Las Vegas</h1>
                </div>
                
            </div>
        </>
    );
};

export default Home;