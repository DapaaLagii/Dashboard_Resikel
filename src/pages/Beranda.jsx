import React from "react";

const Beranda =  () => {
    return (
        <div>
            <div className="container">
      <div className="header">
        <div className="social">
          <a href="#" className="icon">
            <i className="icon-ig"></i>
            @Resikel
          </a>
          <a href="#" className="icon">
            <i className="icon-gmail"></i>
            resikelbussines@gmail.com
          </a>
          <a href="#" className="icon">
            <i className="icon-phone"></i>
            123456789012
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Layanan</a></li>
            <li><a href="#">Program</a></li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <div className="content">
          <h1>Malas Buang Sampah?</h1>
          <h2>RESIKEL Aja</h2>
          <div className="buttons">
            <button>Unduh Aplikasi</button>
            <button>Lihat Selengkapnya</button>
          </div>
        </div>
        <div className="image">
          <img src="/images/image.png" alt="image" />
          <img src="./Image/nokia.png" alt="phone" />
        </div>
      </div>
    </div>
        </div>
    );
}
