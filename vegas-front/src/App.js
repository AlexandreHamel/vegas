import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Admin from './pages/Admin';
import Place from './pages/Place';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Logout from './components/logout/logout';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/inscription" element={<RegisterPage onLogin={handleLogin} />} />
          <Route path="/connexion" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/deconnexion" element={<Logout onLogout={handleLogout} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
