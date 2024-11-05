import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Program from './pages/Program';
import Tentang from './pages/Tentang';
import Beranda from './pages/Beranda';
import Layanan from './pages/Layanan';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/program" element={<Program />} />
        </Routes>
      </Router>

      
    </>
  )
}

export default App
