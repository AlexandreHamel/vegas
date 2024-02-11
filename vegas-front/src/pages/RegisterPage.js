import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../config/config';

const RegisterPage = ({ onLogin }) => {

    const [nameUser, setNameUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {

        const formData = new FormData();
        formData.append("nameUser", nameUser);
        formData.append("email", email);
        formData.append("password", password);

        try {
            const response = await axios.post(`${BASE_URL}/register`, formData,
                {
                    headers: { Accept: "application/json" }
                }
            )

            if (response.data.data.access_token.token) {

                console.log(response.data.data.access_token.token);

                localStorage.setItem("token", response.data.data.access_token.token);
                onLogin();

            } else {
                console.error("Token non trouvé dans la réponse.")
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription", error.message);
        }
    }

    return (
        <>
            <div className="form-container">

                <div className="form">
                    <h2>Créer un compte</h2>
                    <div>
                        <label className="label">Nom:</label>
                        <input className="input" type="text" value={nameUser} onChange={(event) => setNameUser(event.target.value)} />
                    </div>
                    <div>
                        <label className="label">E-mail:</label>
                        <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div>
                        <label className="label">Mot de passe:</label>
                        <input className="input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <button className="button" onClick={handleRegister}>S'inscrire</button>
                </div>

            </div>
        </>

    );
};

export default RegisterPage;