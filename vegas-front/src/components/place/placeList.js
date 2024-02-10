import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../Card';
import { NavLink } from 'react-router-dom';

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
            <h2>PlaceList</h2>
            <ul>
                {places ? (
                    places.map((place) => (
                        <NavLink key={place.id} to={`/place/${place.id}`}>
                            <Card place={place} />
                        </NavLink>  
                    ))
                ) : (
                    <li>No places found</li>
                )}
            </ul>
        </div>
    );
};

export default PlaceList;