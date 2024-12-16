import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Program from './pages/Program';
import Tentang from './pages/Tentang';
import Beranda from './pages/Beranda';
import Layanan from './pages/Layanan';
import LoginAdmin from './pages/loginAdmin';
import Dashboard from './pages/dashboard';
import Penjemputan from './pages/penjemputan';
import Verifikasi from './pages/verifikasi';
import Detail from './pages/detailVerifikasi';
import Navbar from './components/navbar';
import Header from './components/header'; 
import HeaderAdmin from './components/headerAdmin'; 
import Footer from './components/footer'; 

function App() {
  return (
    <>
    <Router>    
        <Routes>
          <Route path="/" element={<><Header /><Navbar /><Tentang /><Footer /></>} />
          <Route path="/layanan" element={<><Header /><Navbar /><Layanan /><Footer /></>} />
          <Route path="/program" element={<><Header /><Navbar /><Program /><Footer /></>} />
          <Route path="/download" element={<><Header /><Navbar /><Beranda /><Footer /></>} />
          <Route path="/admin" element={<><HeaderAdmin /><LoginAdmin /></>} />
          <Route path="/dashboard" element={<><Dashboard/></>} />
          <Route path="/penjemputan" element={<><Penjemputan /></>} />
          <Route path="/verifikasi" element={<><Verifikasi /></>} />
          <Route path="/detail/:idTransaksi" element={<><Detail /></>} />
        </Routes>
    </Router>      
  </>
);
}

export default App;