import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
