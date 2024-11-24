import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    HomeIcon, 
    TruckIcon, 
    CheckCircleIcon, 
    ChevronLeftIcon 
} from '@heroicons/react/24/outline';  

function Sidebar({ isCollapsed, toggleSidebar }) {
    const location = useLocation();
    const menuItems = [
        { 
            path: '/dashboard', 
            label: 'Dashboard', 
            icon: <HomeIcon className="w-6 h-6" /> 
        },
        { 
            path: '/penjemputan', 
            label: 'Penjemputan', 
            icon: <TruckIcon className="w-6 h-6" /> 
        },
        { 
            path: '/verifikasi', 
            label: 'Verifikasi', 
            icon: <CheckCircleIcon className="w-6 h-6" /> 
        }
    ];

   

    return (
        <div className={`
            fixed left-0 top-0 bottom-0 
            bg-white shadow-lg 
            transition-all duration-300 
            ${isCollapsed ? 'w-20' : 'w-64'}
            overflow-hidden
            flex flex-col
            z-50
        `}>
            <div className="flex items-center justify-center space-x-2 py-4 border-b">
                <img 
                    src="../images/logo.png" 
                    alt="Logo" 
                    className="h-16 w-12 rounded" 
                />
                <span className={`
                    text-emerald-600 text-xl font-bold mb-4
                    ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
                    transition-all overflow-hidden
                `}>
                    RESIKEL
                </span>
            </div>
    
            <button 
                onClick={toggleSidebar}
                className="absolute top-8 right-1 z-50 "
            >
                <ChevronLeftIcon 
                    className={`w-6 h-6 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
                />
            </button>
    
            {/* Header Sidebar */}
            <div className="sticky top-0 bg-white z-10 border-b py-4 text-center">
                <h2 className={`
                    font-bold text-xl 
                    ${isCollapsed ? 'opacity-0' : 'opacity-100'}
                    transition-opacity
                `}>
                    {isCollapsed ? 'M' : 'Menu'}
                </h2>
            </div>
    
            <ul className="flex-grow py-4 space-y-2">
            {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link 
                            to={item.path} 
                            className={`
                                flex items-center 
                                px-4 py-2 
                                ${location.pathname === item.path 
                                    ? 'bg-emerald-100 text-emerald-700' 
                                    : 'text-gray-600 hover:bg-gray-100'}
                                transition-colors
                            `}
                        >
                            {item.icon}
                            <span 
                                className={`
                                    ml-3 
                                    ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
                                    transition-all overflow-hidden
                                `}
                            >
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            
            {/* Footer Sidebar */}
            <div 
                className={`
                    border-t p-4 text-center 
                    ${isCollapsed ? 'opacity-0' : 'opacity-100'}
                    transition-opacity
                `}
            >
                <p className="text-sm text-gray-500">© 2023 Resikel App</p>
            </div>
        </div>
);
}

export default Sidebar;