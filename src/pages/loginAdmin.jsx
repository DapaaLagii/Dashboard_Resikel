import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (username && password) {
            navigate('/dashboard');
        } else {
            alert('Silakan masukkan username dan password');
        }
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center" 
            style={{
                backgroundImage: 'url("./images/bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white/35 p-8 rounded-lg shadow-md w-96"
            style={{ backgroundImage: 'url("./images/logo.jpg")', }}>
                <h1 className="text-2xl font-bold mb-6 text-center">LOGIN ADMIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label 
                            htmlFor="username" 
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Username
                        </label>
                        <input 
                            type="text" 
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-emerald-300"
                            placeholder="Masukkan username"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="password" 
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-emerald-300"
                            placeholder="Masukkan password"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;