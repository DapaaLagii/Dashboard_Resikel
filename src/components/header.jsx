import React from "react";

function Header(){
    return(
      <header className="w-full bg-green-600 text-white flex justify-center items-center py-0.1">
        <div className="flex space-x-40">
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
      </header>
    )
}

export default Header;