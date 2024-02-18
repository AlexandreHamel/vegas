import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail';

const PlaceDetails = () => {

    const { id } = useParams();
    const [place, setPlace] = useState({});

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/place/${id}`,
                {
                    headers: { Accept: "application/json" }
                }
            )
            .then((response) => {
                setPlace(response.data);

                console.log(response.data);

            })
            .catch(error => {
                console.error('Erreur', error);
            })
    }, [id]);

    return (
        <>
            <Detail place={place} />
        </>
    );
};

export default PlaceDetails;