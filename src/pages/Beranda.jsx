import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="mt-10 max-w-3xl mx-auto">
      <div className="p-10 flex mb-4 border-4 border-emerald-800 bg-emerald-800 bg-opacity-20 rounded-2xl shadow-[5px_5px_20px_rgba(0,0,0,0.7)]">
        <img src="./images/nokia.png" alt="App Screenshot" className="h-45 self-start mt-2" />
      <div className="flex flex-col ml-6 justify-center">
        <h1 className="text-3xl font-bold text-black text-left mb-4">
          Malas Buang Sampah? <span className="italic text-emerald-700 font-bold">RESIKEL</span> Aja
        </h1>
        <div className="flex gap-4">
      <button className="bg-green-800 text-white px-4 py-1.5 rounded hover:bg-green-500 text-sm whitespace-nowrap mt-12">
        Unduh Aplikasi
      </button>
      <Link className="nav-link" to="/Tentang">
      <button className="bg-green-800 text-white px-4 py-1.5 rounded hover:bg-green-500 text-sm whitespace-nowrap mt-12">
        Lihat Selengkapnya
      </button>
      </Link>
        </div>
      </div>
    </div>
  </section>
);

function Beranda () {
  return (
    <div className="bg-[url('./images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center text-gray-700 font-sans">
      <HeroSection />
    </div>
  );
}

export default Beranda;