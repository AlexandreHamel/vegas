import React, { useEffect, useState } from 'react';
import axios from "axios";

const PlaceList = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/place")
            .then((response) => {
                setPlaces(response.data)
                console.log(response.data);
            });
    }, []);

    return (
        <div className='container'>
            <h1>PlaceList</h1>
            <ul>
                {places ? (
                    places.map((place, index) => (
                        <li key={index}>
                            <br />
                            <h2>{place.namePlace}</h2>
                            <div><img width={120} height={80} src={place.picture} alt="" /></div>
                            <br />
                            <p>Adresse: {place.address}</p>
                            <br />
                            <p> {place.description}</p>
                            
                        </li>
                        
                    ))
                ) : (
                    <li>No places found</li>
                )}
            </ul>
        </div>
    );
};

export default PlaceList;