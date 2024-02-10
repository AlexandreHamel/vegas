import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Admin from './pages/Admin';
import Place from './pages/Place';


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
          <Route path="/place" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
