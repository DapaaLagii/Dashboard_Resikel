import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Program from './pages/Program';
import Tentang from './pages/Tentang';
import Beranda from './pages/Beranda';
import Layanan from './pages/Layanan';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer'; 

function App() {
  return (
    <>
      <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/program" element={<Program />} />
        </Routes>
        <Footer />
      </Router>      
    </>
  )
}

export default App
