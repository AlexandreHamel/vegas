import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../config/config';
import Navbar from '../components/Navbar';
import { redirect } from 'react-router-dom';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleConnect = async () => {

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        try {
            const response = await axios.post(`${BASE_URL}/login`, formData)

            if (response.data.data.access_token.token) {

                console.log(response.data);

                localStorage.setItem("token", response.data.data.access_token.token);
                setIsLoggedIn(true);

            } else {
                console.error("Token non trouvé dans la réponse.")
            }

        } catch (error) {
            console.error("Erreur lors de la connexion: ", error.message);
        }
    
        if (isLoggedIn) {
            return redirect("/");
        }
    }

    return (
        <>
            <Navbar />
            <div className="form-container">
                <div className="form">
                    <h2>Connexion</h2>

                    <div>
                        <label className="label">E-mail</label>
                        <input className="input" value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    </div>
                    <div>
                        <label className="label">Mot de passe</label>
                        <input className="input" value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    </div>

                    <button className="button" onClick={handleConnect}>Se connecter</button>
                </div>
            </div>
        </>

    );
};

export default LoginPage;