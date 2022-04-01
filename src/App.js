import Profile from './pages/Profile';
import Register from './pages/Register';
import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import './supports/style/utils.css';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
