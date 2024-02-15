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
import PlaceAdd from './components/place/placeAdd';
import PlaceUpdate from './components/place/placeUpdate';
import NewCategoryForm from './components/category/categoryAdd';
import CategoryUpdate from './components/category/categoryUpdate';
import Restaurants from './pages/Restaurants';
import Shows from './pages/Shows';
import PLaceListAdmin from './components/place/placeListAdmin';
import CategoryListAdmin from './components/category/categoryListAdmin';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('click');
  }

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
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
          <Route path="/admin/" element={<Admin />} />
          <Route path="/admin/place/list" element={<PLaceListAdmin />} />
          <Route path="/admin/place/add" element={<PlaceAdd />} />
          <Route path="/admin/place/update/:id" element={<PlaceUpdate />} />
          <Route path="/admin/category/list" element={<CategoryListAdmin />} />
          <Route path="/admin/category/add" element={<NewCategoryForm />} />
          <Route path="/admin/category/update/:id" element={<CategoryUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
