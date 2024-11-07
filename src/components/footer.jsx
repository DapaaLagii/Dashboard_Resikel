import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Footer(){
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/tentang' || location.pathname === '/layanan' || location.pathname === '/program'); {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
    return(
            <footer className="w-full bg-white text-green-800 mt-auto py-8">
              <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="font-semibold">Tentang Kami</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link 
                to="/tentang#resikel" 
                className="hover:underline"
                onClick={() => scrollToSection('resikel')}
              >
                Resikel
              </Link>
            </li>
            <li>
              <Link 
                to="/tentang#pejantara" 
                className="hover:underline"
                onClick={() => scrollToSection('pejantara')}
              >
                Pejantara
              </Link>
            </li>
            <li>
              <Link 
                to="/tentang#agrimadani" 
                className="hover:underline"
                onClick={() => scrollToSection('agrimadani')}
              >
                AgriMadani
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Layanan</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/layanan#rewarding" className="hover:underline" onClick={() => scrollToSection('rewarding')}>
                Rewarding
              </Link>
            </li>
            <li>
              <Link to="/layanan#komunitas" className="hover:underline" onClick={() => scrollToSection('komunitas')}>
                Komunitas
              </Link>
            </li>
            <li>
              <Link to="/layanan#jemput" className="hover:underline" onClick={() => scrollToSection('jemput')}>
                Jemput Sampah
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Program</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/program#edukasi" className="hover:underline"  onClick={() => scrollToSection('edukasi')}>
                Edukasi
              </Link>
            </li>
            <li>
              <Link to="/program#event" className="hover:underline"  onClick={() => scrollToSection('event')}>
                Event
              </Link>
            </li>
          </ul>
        </div>
      </div>
              <div className="mt-16">
                <hr className="border-t border-gray-300 mb-2" />
                <div className="flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
                  <div className="flex items-center mt-2">
                    <img 
                      src="./images/logo.png" 
                      alt="Resikel Logo" 
                      className="h-12 w-auto mr-3"
                    />
                    <span className="text-sm mb-2">RESIKEL © 2024 AgriMadani. All Rights Reserved.</span>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="./images/ig2.png" 
                      alt="Logo 1" 
                      className="h-8 w-auto mx-2"
                    />
                    <img 
                      src="./images/mail2.png" 
                      alt="Logo 2" 
                      className="h-8 w-auto mx-2"
                    />
                    <img 
                      src="./images/telpon2.png" 
                      alt="Logo 3" 
                      className="h-8 w-auto ml-2"
                    />
                  </div>
                </div>
              </div>
            </footer>
    )
}

export default Footer;