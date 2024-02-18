import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../NavbarAdmin';
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { Link } from 'react-router-dom';

const PLaceListAdmin = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        displayPlaces();
    }, []);

    const displayPlaces = async () => {
        await axios
                .get(`${BASE_URL}/place`)
                .then((response) => {
                    setPlaces(response.data);
                })
    }

    const deletePlace = (id) => {
        axios
            .delete(`${BASE_URL}/place/${id}`, {
                headers: {
                    Authorization: "Bearer" + localStorage.getItem("token")
                }
            })
            .then(response => {
                displayPlaces();

                console.log(response.data);

            });
    }

    return (
        <>
            <NavbarAdmin />
            <div className="container">
                <h2>Liste des lieux</h2>
                <div className='table-container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Adresse</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Image</th>
                                <th>Catégorie</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {places.map((place) => (
                                <tr key={place.id}>
                                    <td> {place.namePlace} </td>
                                    <td> {place.address} </td>
                                    <td> {place.latitude} </td>
                                    <td> {place.longitude} </td>
                                    
                                    <td>
                                        <img
                                            src={`http://127.0.0.1:8000/storage/uploads/${place.picture}`}
                                            alt={place.picture}
                                            width="75px"
                                        />
                                    </td>
                                    <td> {place.category.nameCategory} </td>
                                    <td>
                                        <button className='btn-delete' onClick={() => deletePlace(place.id)}>Supprimer</button>
                                    </td>
                                    <td>
                                        <Link to={`/admin/place/update/${place.id}`} >
                                            <button className='btn'>Modifier</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PLaceListAdmin;