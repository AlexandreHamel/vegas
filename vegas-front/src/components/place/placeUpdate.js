import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../NavbarAdmin';
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { useNavigate, useParams } from 'react-router-dom';

const PlaceUpdate = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [namePlace, setNamePlace] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [picture, setPicture] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [namePicture, setNamePicture] = useState("");

    useEffect(() => {
        fetchData();
        getCategory();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/place/${id}`);
            const place = response.data;

            if (response.data) {
                setNamePlace(place.namePlace);
                setAddress(place.address);
                setLatitude(place.latitude);
                setLongitude(place.longitude);
                setDescription(place.description);
                setExtras(place.extras);
                setCategoryId(place.category_id);
                setNamePicture(place.picture);
            }

        } catch (error) {
            console.error('Error updating place', error)
        }
    };

    const getCategory = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/category`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handlePicture = (event) => {
        setPicture(event.target.files[0]);
    }

    const handleCategory = (event) => {
        setCategoryId(event.target.value);
    }

    const updatePlace = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("namePlace", namePlace);
        formData.append("address", address);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
        formData.append("description", description);
        formData.append("extras", extras);
        formData.append("picture", picture);
        formData.append("category_id", category_id);
        formData.append("_method", "PUT");

        try {
            const response = await axios.post(`${BASE_URL}/place/${id}`, formData, {
                headers: {
                    Authorization: "Bearer" + localStorage.getItem("token"),
                }
            });

            console.log(response.data);
            navigate("/admin/place/list");

        } catch (error) {
            console.error('Error updating place:', error);
            if (error.response && error.response.data) {
                console.log(error.response);
            }
        }
    }

    return (
        <>
            <NavbarAdmin />
            <div className='form-container'>

                <form className='form' onSubmit={updatePlace}>
                    <h2>Place Update</h2>

                    <label className='label'>
                        Nom:
                        <input
                            className='input'
                            type="text"
                            name='namePlace'
                            value={namePlace}
                            onChange={(event) => {
                                setNamePlace(event.target.value)
                            }}
                        />
                    </label>
                    <label className='label'>
                        Adresse:
                        <input
                            className='input'
                            type="text"
                            name='address'
                            value={address}
                            onChange={(event) => {
                                setAddress(event.target.value)
                            }}
                        />
                    </label>
                    <label className='label'>
                        Latitude:
                        <input
                            className='input'
                            type="text"
                            name='latitude'
                            value={latitude}
                            onChange={(event) => {
                                setLatitude(event.target.value)
                            }}
                        />
                    </label>
                    <label className='label'>
                        Longitude:
                        <input
                            className='input'
                            type="text"
                            name='longitude'
                            value={longitude}
                            onChange={(event) => {
                                setLongitude(event.target.value)
                            }}
                        />
                    </label>
                    <label className='label'>
                        Description:
                        <textarea
                            cols="30"
                            rows="6"
                            className='input'
                            name="description"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value)
                            }}
                        />
                    </label>
                    <label className='label'>
                        Extras du lieu:
                        <textarea
                            cols="30"
                            rows="4"
                            className='input'
                            name="extras"
                            value={extras}
                            onChange={(event) => {
                                setExtras(event.target.value)
                            }}
                        />
                    </label>
                    <label className='label'>
                        Image du Lieu: {namePicture}
                        <input
                            className='input'
                            type="file"
                            name="picture"
                            onChange={handlePicture}
                        />
                    </label>
                    <label className='label'>Catégorie:</label>
                    <select onChange={handleCategory} value={category_id} >
                        <option>Choisissez une catégorie</option>
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}>
                                {category.nameCategory}
                            </option>
                        ))}
                    </select>

                    <button className='button' type="submit">Soumettre</button>
                </form>
            </div>
        </>
    );
};

export default PlaceUpdate;