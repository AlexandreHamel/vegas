import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../NavbarAdmin';
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { Link } from 'react-router-dom';

const CategoryListAdmin = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        displayCategories();
    }, []);

    const displayCategories = async () => {
        await axios
            .get(`${BASE_URL}/category`)
            .then((response) => {
                setCategories(response.data);
            })
    }

    const deleteCategory = (id) => {
        axios.delete(`${BASE_URL}/category/${id}`, {
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        })
        .then(response => {
            displayCategories();

            console.log(response.data);
        })
    }

    return (
        <>
            <NavbarAdmin />
            <div className="container">
                <h2>Liste des catégories</h2>
                <div className="table-container">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Catégories</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td> {category.nameCategory} </td>
                                    <td>
                                        <button className='btn-delete' onClick={() => deleteCategory(category.id)}>Supprimer</button>
                                    </td>
                                    <td>
                                        <Link to={`/admin/category/update/${category.id}`}>
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

export default CategoryListAdmin;