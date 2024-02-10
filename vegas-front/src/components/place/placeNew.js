import axios from 'axios';
import React, { useState } from 'react';

const NewPlaceForm = () => {

    // const [file, setFile] = useState(null);

    const [formData, setFormData] = useState({
        namePlace: '',
        address: '',
        latitude: '',
        longitude: '',
        description: '',
        extras: '',
        picture: '',
        category_id: '',
        user_id: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            // const formData = new FormData();
            // formData.append('picture', file);

            const response = await axios.post(`http://127.0.0.1:8000/api/place`, formData)

            console.log(response.data);

            // window.location.href = "/admin";

        } catch (error) {
            console.error('Erreur lors de l\'envoi des données au backend:', error);
        }
    };

    return (
        <div className='form-container'>

            <form className='form' onSubmit={handleSubmit}>
                <h2>Ajouter un lieu</h2>

                <label className='label'>
                    Nom:
                    <input
                        className='input'
                        type="text"
                        name='namePlace'
                        value={formData.namePlace}
                        onChange={(event) => setFormData({ ...formData, namePlace: event.target.value })}
                    />
                </label>

                <label className='label'>
                    Adresse:
                    <input
                        className='input'
                        type="text"
                        name='address'
                        value={formData.address}
                        onChange={(event) => setFormData({ ...formData, address: event.target.value })}
                    />
                </label>

                <label className='label'>
                    Latitude:
                    <input
                        className='input'
                        type="text"
                        name='latitude'
                        value={formData.latitude}
                        onChange={(event) => setFormData({ ...formData, latitude: event.target.value })}
                    />
                </label>

                <label className='label'>
                    Longitude:
                    <input
                        className='input'
                        type="text"
                        name='longitude'
                        value={formData.longitude}
                        onChange={(event) => setFormData({ ...formData, longitude: event.target.value })}
                    />
                </label>

                <label className='label'>
                    Description:
                    <textarea 
                        className='input' 
                        name="description"
                        value={formData.description}
                        onChange={(event) => setFormData({ ...formData, description: event.target.value})}
                    />
                </label>

                <label className='label'>
                    Extras du lieu:
                    <textarea 
                        className='input' 
                        name="extras"
                        value={formData.extras}
                        onChange={(event) => setFormData({ ...formData, extras: event.target.value})}
                    />
                </label>

                <label className='label'>
                    Image du lieu:
                    <input 
                        className='input' 
                        type="file"
                        name="picture"
                        value={formData.picture}
                        onChange={(event) => setFormData( ...formData, event.target.files[0])}
                    />
                </label>

                <label className='label'>
                    Catégorie id:
                    <input
                        className='input'
                        type="text"
                        name='category_id'
                        value={formData.category_id}
                        onChange={(event) => setFormData({ ...formData, category_id: event.target.value })}
                    />
                </label>

                <label className='label'>
                    User id:
                    <input
                        className='input'
                        type="text"
                        name='user_id'
                        value={formData.user_id}
                        onChange={(event) => setFormData({ ...formData, user_id: event.target.value })}
                    />
                </label>

                <button className='button' type="submit">Soumettre</button>
            </form>
        </div>
    );
};

export default NewPlaceForm;