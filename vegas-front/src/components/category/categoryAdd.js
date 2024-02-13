import axios from 'axios';
import React, { useState } from 'react';
import NavbarAdmin from '../NavbarAdmin';

const NewCategoryForm = () => {

    const [formData, setFormData] = useState({
        nameCategory: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/category`, formData)

            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données au backend:', error);
        }
    };

    return (
        <>
            <NavbarAdmin />
            <div className='form-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <h2>Ajouter une catégorie</h2>

                    <label className='label'>
                        Catégorie:
                        <input
                            className='input'
                            type="text"
                            name='nameCategory'
                            value={formData.nameCategory}
                            onChange={(event) => setFormData({ ...formData, nameCategory: event.target.value })}
                        />
                    </label>
                    <button className='button' type="submit">Soumettre</button>
                </form>
            </div>
        </>
    );
};

export default NewCategoryForm;