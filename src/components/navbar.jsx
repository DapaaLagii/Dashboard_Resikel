import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="bg-white text-emerald-700 p-4">
        <div className="container mx-auto flex justify-between items-center">       
            <div className="flex items-center">
                <img 
                    src="./images/logo.png" 
                    alt="Logo" 
                    className="h-12 w-auto"
                />
            </div>
          
            <nav className="flex items-center gap-12" navbar>
                <Link className="nav-link hover:text-emerald-200 text-lg" to="/">
                    Beranda
                </Link>
                <Link className="nav-link hover:text-emerald-200 text-lg" to="/Tentang">
                    Tentang Kami
                </Link>
                <Link className="nav-link hover:text-emerald-200 text-lg" to="/Layanan">
                    Layanan
                </Link>
                <Link className="nav-link hover:text-emerald-200 text-lg" to="/Program">
                    Program
                </Link>
            </nav>
        </div>
    </nav>
    );
}

export default Navbar;