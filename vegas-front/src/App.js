import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Admin from './pages/Admin';
import Place from './pages/Place';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Logout from './components/logout/logout';
import PlaceAdd from './components/place/placeAdd';
import PlaceUpdate from './components/place/placeUpdate';
import NewCategoryForm from './components/category/categoryAdd';
import CategoryUpdate from './components/category/categoryUpdate';
import Restaurants from './pages/Restaurants';
import Shows from './pages/Shows';
import PLaceListAdmin from './components/place/placeListAdmin';
import CategoryListAdmin from './components/category/categoryListAdmin';
import Noaccess from './pages/Noaccess';
import auth from './services/auth/token';

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
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/spectacles" element={<Shows />} />          
          <Route path="/place/:id" element={<Place />} />
          <Route path="/inscription" element={<RegisterPage onLogin={handleLogin} />} />
          <Route path="/connexion" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/deconnexion" element={<Logout onLogout={handleLogout} />} />
          <Route path="/admin/" 
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <Admin /> : <Noaccess /> : <Navigate to="/inscription"/> } />
          <Route path="/admin/place/list" 
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <PLaceListAdmin /> : <Noaccess /> : <Navigate to="/inscription" />} />
          <Route path="/admin/place/add" 
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <PlaceAdd /> : <Noaccess /> : <Navigate to="/inscription" /> } />
          <Route path="/admin/place/update/:id" 
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <PlaceUpdate /> : <Noaccess /> : <Navigate to="/inscription" /> } />
          <Route path="/admin/category/list"
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <CategoryListAdmin /> : <Noaccess /> : <Navigate to="/inscription" /> } />
          <Route path="/admin/category/add" 
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <NewCategoryForm /> : <Noaccess /> : <Navigate to="/inscription" /> } />
          <Route path="/admin/category/update/:id" 
            element={ auth.getExpiryTime() ? auth.loggedAndAdmin() ? <CategoryUpdate />: <Noaccess /> : <Navigate to="/inscription" /> } />
          <Route path="/noaccess" element={<Noaccess />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
