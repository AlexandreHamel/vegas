import React from 'react';
import picVegas from '../styles/images/pic-vegas.jpg';
import Navbar from '../components/Navbar';
import PlaceList from '../components/place/placeList';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='home-container'>

                    <img className='img-home' src={picVegas} alt="" />
                    <h1>Bienvenue à Las Vegas</h1>
                    <h2>Planifiez votre voyage à Las Vegas</h2>
                    <p>Bonjour! Bienvenue sur le site Internet officiel de Las Vegas, Nevada. Las Vegas a de tout : concerts, spectacles, hockey, sports, shopping, restauration, nightlife, golf, spas, tours, événements, aventure, hébergement de luxe et bien plus encore. Trouvez-y tout cela, ici à Las Vegas, la capitale mondiale du divertissement!</p>

                    <div className='home-link'>
                        <Link to={'/hotels'}>- Hôtels-Casinos -</Link>
                        <Link to={'/restaurants'}>- Restaurants -</Link>
                        <Link to={'/spectacles'}>- Spectacles -</Link>
                    </div>
                    <PlaceList />

                </div>

            </div>
        </>
    );
};

export default Home;