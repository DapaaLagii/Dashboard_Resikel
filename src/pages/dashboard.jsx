import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';


// SVG Icons
const TruckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-16 h-16 text-emerald-800" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0" 
    />
  </svg>
);

const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-8 h-8 text-white" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const navigate = useNavigate();

  const handlePenjemputanClick = () => {
    navigate('/penjemputan');
  };

  const handleValidasiClick = () => {
    navigate('/verifikasi');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex" style={{ backgroundImage: 'url(./images/bg.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
    <Sidebar 
        isCollapsed={isCollapsed} 
        toggleSidebar={toggleSidebar} 
    />
    <div className={`
        p-6 
        flex-1
        transition-all 
        duration-300 
        ${isCollapsed ? 'ml-20' : 'ml-64'}
    `}>
        <div className="w-full">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-emerald-500">Dashboard</h1>
                <div className="mr-6">
                    <button className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                </div>
            </div>

            
            <div className="flex justify-center items-center h-full">
                <div className="flex justify-center space-x-8">
                    <div 
                        className="group cursor-pointer"
                        onClick={handlePenjemputanClick}
                    >
                        <div className="bg-emerald-200 w-48 h-48 rounded-3xl flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-105">
                            <TruckIcon />
                        </div>
                        <p className="text-center mt-4 text-lg font-medium text-emerald-800">
                            Penjemputan
                        </p>
                    </div>

                    <div 
                        className="group cursor-pointer"
                        onClick={handleValidasiClick}
                    >
                        <div className="bg-emerald-200 w-48 h-48 rounded-3xl flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-105">
                            <div className="rounded-full bg-emerald-800 p-4">
                                <CheckIcon />
                            </div>
                        </div>
                        <p className="text-center mt-4 text-lg font-medium text-emerald-800">
                            Verifikasi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Dashboard;