import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../Card';
import { NavLink } from 'react-router-dom';

const PlaceList = ({ categoryId }) => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/place');
                setPlaces(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des lieux:', error);
            }
        };

        fetchPlaces();
    }, []);

    const filteredPlaces = categoryId ? places.filter(
        place => place.category_id === categoryId
        ) : places;

    return (
        <div className='container'>
            <h2>PlaceList</h2>
            <ul>
                {places ? (
                    filteredPlaces.map((place) => (
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