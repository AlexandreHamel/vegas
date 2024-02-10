import React from 'react';

const Card = ({ place }) => {
    return (
            <li>
                <h3>{place.namePlace}</h3>
                <img width={300} src={`http://127.0.0.1:8000/storage/uploads/${place.picture}`} alt={place.picture} />
                <p> {place.category.nameCategory} </p>
                <address>
                    <p>Adresse: {place.address}</p>
                </address>
                <p> {place.description}</p>
            </li>
    );
};

export default Card;