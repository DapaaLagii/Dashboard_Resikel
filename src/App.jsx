// import { useState } from 'react'
// import { React } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './index.css'
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Layanan from "./pages/Layanan";
import Program from "./pages/Program";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";


function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/program" element={<Program />} />
        </Routes>
        

      
      </>
    );
  }
  
  export default App;




