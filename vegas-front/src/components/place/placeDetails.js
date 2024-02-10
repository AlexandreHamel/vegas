import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetails = () => {

    const { id } = useParams();
    const [place, setPlace] = useState({});
    

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/place/${id}`)
            .then((response) => {
                setPlace(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Erreur', error);
            })
    }, [id]);

    return (
        <div>
            <div className='container'>
                <h1> {place.namePlace && place.namePlace.toUpperCase()} </h1>
                <img src={`http://127.0.0.1:8000/storage/uploads/${place.picture}`} alt={place.picture} />
                {/* <p> {place.category.nameCategory} </p> */}
                <address>
                    <p>Adresse: {place.address}</p>
                </address>
                <p> {place.description}</p>
            </div>

        </div>
    );
};

export default PlaceDetails;