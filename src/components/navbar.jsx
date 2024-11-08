import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-gray-600 p-4 relative">
            <div className="container mx-auto flex justify-between items-center">       
                <div className="flex items-center">
                    <img 
                        src="./images/logo.png" 
                        alt="Logo" 
                        className="h-12 w-auto"
                    />
                </div>
          
                {/* Desktop Navigation */}
                <div className="hidden md:flex font-medium items-center gap-12">
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/"
                    >
                        Beranda
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/Tentang"
                    >
                        Tentang Kami
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/Layanan"
                    >
                        Layanan
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/Program"
                    >
                        Program
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden focus:outline-none"
                >
                    <svg 
                        className="w-6 h-6 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            // Ikon X
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        ) : (
                            // Ikon Hamburger
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div 
                className={`
                    md:hidden 
                    absolute 
                    left-0 
                    right-0 
                    bg-white 
                    shadow-lg 
                    overflow-hidden 
                    transition-all 
                    duration-300 
                    ease-in-out 
                    ${isMenuOpen 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-4 invisible'
                    }
                `}
            >
                <div className="flex flex-col items-center py-4 space-y-4">
                    <NavLink 
                        onClick={toggleMenu}
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/"
                    >
                        Beranda
                    </NavLink>
                    <NavLink 
                        onClick={toggleMenu}
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/Tentang"
                    >
                        Tentang Kami
                    </NavLink>
                    <NavLink 
                        onClick={toggleMenu}
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/Layanan"
                    >
                        Layanan
                    </NavLink>
                    <NavLink 
                        onClick={toggleMenu}
                        className={({ isActive }) => 
                            `nav-link text-lg ${isActive ? 'text-emerald-500' : 'text-gray-600'} hover:text-emerald-200 transition-colors duration-300`
                        } 
                        to="/Program"
                    >
                        Program
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;