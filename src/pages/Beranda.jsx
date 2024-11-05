import React from "react";

const Beranda= () => {
  return (
    
    <div className="bg-green-50 min-h-screen flex flex-col items-center text-gray-700 font-sans">
      {/* Header */}
      <header className="w-full bg-green-600 text-white flex justify-center items-center py-0">
        <div className="space-x-40">
          {/* <img src="" alt="IG" /> */}
          <span>@Resikel</span>
          <span>resikelbusiness@email.com</span>
          <span>+123456789012</span>
        </div>
        {/* <div className="justify-content-center space-x-4">
          
        </div> */}
      </header>


      {/* Navbar */}
      <nav className="mt-2 justify-end items-center gap-20 inline-flex">
        <div><img className = "w-auto " src="./images/logo.png" alt="Logo"/></div>
        <a href="#" className="text-green-800 hover:text-green-600">Beranda</a>
        <a href="#" className="text-green-800 hover:text-green-600">Tentang Kami</a>
        <a href="#" className="text-green-800 hover:text-green-600">Layanan</a>
        <a href="#" className="text-green-800 hover:text-green-600">Program</a>
      </nav>

      {/* Hero Section */}
      <section className="bg-[url(.images/bg.jpg)] bg-cover flex items-center justify-center w-full max-w-4xl rounded-lg shadow-lg mt-8 p-26 flex flex-col items-center text-center" >
        <div className="bg-green-100 p-10 flex items-center justify-center mb-4">
          <img src="./images/nokia.png" alt="App Screenshot" className="h-45" />
          <h1 className="text-3xl font-semibold text-green-800 mb-20">Malas Buang Sampah? <span className="italic text-green-600 font-bold">RESIKEL</span> Aja</h1>
        <div className="h-10 mt-auto">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">Unduh Aplikasi</button>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">Lihat Selengkapnya</button>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-green-600 text-white mt-auto py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="font-semibold">Tentang Kami</h2>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Resikel</a></li>
              <li><a href="#" className="hover:underline">Pejantara</a></li>
              <li><a href="#" className="hover:underline">AgriMadani</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Layanan</h2>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Rewarding</a></li>
              <li><a href="#" className="hover:underline">Komunitas</a></li>
              <li><a href="#" className="hover:underline">Jemput Sampah</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Program</h2>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Edukasi</a></li>
              <li><a href="#" className="hover:underline">Event</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          RESIKEL © 2024 AgriMadani. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Beranda;
