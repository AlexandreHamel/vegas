import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeafletMap from '../LeafletMap';

const PlaceDetails = () => {

    const { id } = useParams();
    const [place, setPlace] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/place/${id}`,
                {
                    headers: { Accept: "application/json" }
                }
            )
            .then((response) => {
                setPlace(response.data);
                setIsLoaded(true);

                console.log(response.data.category.nameCategory);

            })
            .catch(error => {
                console.error('Erreur', error);
            })
    }, [id, isLoaded]);

    return (
        <>
            <div className='container'>
                <div className="detail">
                    <img src={`http://127.0.0.1:8000/storage/uploads/${place.picture}`} alt={place.picture} />
                    <div className="detail-side">
                        {isLoaded === true ? (
                            <span> {place.category.nameCategory} </span>
                        ) : ("")}
                        <h1> {place.namePlace && place.namePlace.toUpperCase()} </h1>
                        <p> {place.description}</p>

                        <p> {place.extras} </p>
                        <address>
                            <h4>Adresse : </h4>
                            <p> {place.address}</p>
                        </address>
                        <h4>Coordonnées GPS: </h4>
                        <p>{" "}{place.latitude}, {place.longitude}{" "}</p>
                    </div>
                </div>
                <div className="detail-map">
                    <h2>Localisation :</h2>

                    <div id='map'>
                        {isLoaded === true ? (
                            <LeafletMap place={place} />
                        ) : ("")}
                    </div>

                </div>
            </div>
        </>
    );
};

export default PlaceDetails;