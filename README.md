# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function Penjemputan() {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="flex" style={{ backgroundImage: 'url(./images/bg.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
            <Sidebar
                isCollapsed={isCollapsed}
                toggleSidebar={toggleSidebar}
            />
        </div>
        <div className={`
        p-6 
        flex-1
        transition-all 
        duration-300 
        ${isCollapsed ? 'ml-20' : 'ml-64'}
    `}>
    );
}

export default Penjemputan;