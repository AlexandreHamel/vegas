import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../NavbarAdmin';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../config/config';
import axios from 'axios';

const CategoryUpdate = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nameCategory, setNameCategory] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/category/${id}`);
            const category = response.data;

            if (response.data) {
                setNameCategory(category.nameCategory);
            }
        } catch (error) {
            console.error('Error updating category', error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const updateCategory = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("nameCategory", nameCategory);
        formData.append("_method", "PUT");

        try {
            const response = await axios.post(`${BASE_URL}/category/${id}`, formData, {
                headers: {
                    Authorization: "Bearer" + localStorage.getItem("token"),
                }
            });

            console.log(response.data);
            navigate("/admin/category/list")
            
        } catch (error) {
            console.error('Error upadting category:', error);
            if(error.response && error.response.data) {
                console.log(error.response);
            }
        }
    }
 
    return (
        <>
            <NavbarAdmin />
            <div className='form-container'>
                <form className='form' onSubmit={updateCategory}>
                    <h2>Category Update</h2>
                    <label className='label'>
                        Catégorie:
                        <input
                            className='input'
                            type="text"
                            name='nameCategory'
                            value={nameCategory}
                            onChange={(event) => {
                                setNameCategory(event.target.value)
                            }}
                        />
                    </label>
                    <button className='button' type='submit'>Modifier la catégorie</button>
                </form>
            </div>
        </>
    );
};

export default CategoryUpdate;