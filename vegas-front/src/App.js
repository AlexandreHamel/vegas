import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Admin from './pages/Admin';
import Place from './pages/Place';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/inscription" element={<RegisterPage />} />
          <Route path="/connexion" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
