import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav className="bg-white text-gray-600 p-4">
        <div className="container mx-auto flex justify-between items-center">       
            <div className="flex items-center">
                <img 
                    src="./images/logo.png" 
                    alt="Logo" 
                    className="h-12 w-auto"
                />
            </div>
          
            <nav className="font-medium flex items-center gap-12" navbar>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-700' : 'text-gray-600'} hover:text-emerald-200`
                        } 
                        to="/"
                    >
                        Beranda
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-700' : 'text-gray-600'} hover:text-emerald-200`
                        } 
                        to="/Tentang"
                    >
                        Tentang Kami
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-700' : 'text-gray-600'} hover:text-emerald-200`
                        } 
                        to="/Layanan"
                    >
                        Layanan
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-700' : 'text-gray-600'} hover:text-emerald-200`
                        } 
                        to="/Program"
                    >
                        Program
                    </NavLink>
                </nav>
        </div>
    </nav>
    );
}

export default Navbar;