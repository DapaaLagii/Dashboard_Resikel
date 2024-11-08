import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-green-600 text-white">
      <div className="hidden md:flex justify-center items-center py-0.5">
        <div className="flex space-x-10 lg:space-x-40">
          <div className="flex items-center">
            <img src="./images/ig.png" alt="Resikel Logo" className="w-6 h-6 mr-2" />
            <span>: @Resikel</span>
          </div>
      
          <div className="flex items-center">
            <img src="./images/mail.png" alt="Email Icon" className="w-6 h-6 mr-2" />
            <span>: resikelbusiness@email.com</span>
          </div>
      
          <div className="flex items-center">
            <img src="./images/telpon.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
            <span>: +123456789012</span>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-1">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg 
              className={`w-6 h-6 transition-transform duration-300`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <>
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </>
              ) : (
                <>
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </>
              )}
            </svg>
          </button>
          <span>Kontak Kami</span>
        </div>

        {isMenuOpen && (
          <div className="absolute z-50 w-full bg-green-600 py-4 animate-slide-down">
            <div className="flex flex-col space-y-4 items-center">
              <div className="flex items-center">
                <img src="./images/ig.png" alt="Resikel Logo" className="w-6 h-6 mr-2" />
                <span>: @Resikel</span>
              </div>
        
              <div className="flex items-center">
                <img src="./images/mail.png" alt="Email Icon" className="w-6 h-6 mr-2" />
                <span>: resikelbusiness@email.com</span>
              </div>
        
              <div className="flex items-center">
                <img src="./images/telpon.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
                <span>: +123456789012</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;