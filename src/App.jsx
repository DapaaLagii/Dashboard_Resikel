// import { useState } from 'react'
// import Footer from "/components/Footer";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './index.css';
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Layanan from "./pages/Layanan";
import Program from "./pages/Program";
import Navbar from "./components/Navbar";




function App() {
    return (
      <Router>       
          <Navbar/>
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/program" element={<Program />} />
            </Routes>    
      </Router>
    );
  }
  
  export default App;




