import React from 'react';

const HeaderAdmin = () => {
    return (
        <div className="relative z-10">
            <header className="bg-white p-1">
                <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <img 
                            src="./images/logo.png" 
                            alt="Logo" 
                            className="h-16 w-12 rounded" 
                        />
                        <span className="text-emerald-600 text-xl font-bold flex items-center mb-2">RESIKEL</span>
                    </div>
                    <div className="ml-auto mr-6">
                        <button className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderAdmin;