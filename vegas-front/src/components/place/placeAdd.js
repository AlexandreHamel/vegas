import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from '../NavbarAdmin';

const PlaceAdd = () => {

    const navigate = useNavigate();

    const [namePlace, setNamePlace] = useState("");
    const [address, setAdress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [picture, setPicture] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [validationError, setValidationError] = useState({});
    const [categories, setCategories] = useState([]);

    const handlePicture = (event) => {
        setPicture(event.target.files[0]);
    }

    const handleCategory = (event) => {
        setCategoryId(event.target.value);
    }

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        await axios
            .get('http://127.0.0.1:8000/api/category')
            .then(response => {
                setCategories(response.data)
            })
    }

    const addPlace = async (event) => {
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

        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        await axios
            .post(`http://127.0.0.1:8000/api/place`, formData)
            .then(navigate("/admin"))
            .catch(({ response }) => {
                if (response.status !== 200) {
                    setValidationError(response.data);
                }
            });
    };

    return (
        <>
            <NavbarAdmin />
            <div className='form-container'>
                <div>
                    {Object.keys(validationError).length > 0 && (
                        <ul>
                            {Object.entries(validationError).map(
                                ([key, value]) => (
                                    <li key={key}> {value} </li>
                                )
                            )}
                        </ul>
                    )}
                </div>

                <form className='form' onSubmit={addPlace}>
                    <h2>Ajouter un lieu</h2>

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
                                setAdress(event.target.value)
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
                        Sélectionner un fichier:
                        <input
                            className='input'
                            type="file"
                            name="picture"
                            onChange={handlePicture}
                        />
                    </label>
                    <label className='label'>Catégorie:</label>
                    <select onChange={handleCategory} >
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

export default PlaceAdd;