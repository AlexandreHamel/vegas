import React from 'react';

const Card = ({ place }) => {
    return (
        <div className='card'>
            <img width={300} src={`http://127.0.0.1:8000/storage/uploads/${place.picture}`} alt={place.picture} />
            <div className="card-bottom">
                <h3>{place.namePlace}</h3>
                <div className="card-text">
                    <p> {place.category.nameCategory} </p>
                    <p> {place.extras}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;