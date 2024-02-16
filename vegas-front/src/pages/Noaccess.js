import React from 'react';
import logo403 from '../styles/images/Acces_interdit_403.jpg'
import Navbar from '../components/Navbar';

const Noaccess = () => {
    return (
        <>
        <Navbar />
        <div className='container noaccess'>
            <h2>Accès refusé</h2>
            <h3>Page non accessible</h3>
            <img src={ logo403 } alt="Logo accès refusé" />
            <p>Merci de vous <a href="/connexion">connecter</a> ou de vous <a href="/inscription">enregistrer</a>.</p>
        </div>
        </>
    );
};

export default Noaccess;