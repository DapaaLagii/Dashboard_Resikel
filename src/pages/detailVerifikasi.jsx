import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function DetailVerifikasi() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { idTransaksi } = useParams(); 
    const location = useLocation();
    const transaksiDetail = location.state?.transaksiDetail;

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div 
            className="flex" 
            style={{ 
                backgroundImage: 'url(../images/bg.jpg)', 
                backgroundSize: 'cover', 
                minHeight: '100vh' 
            }}
        >
            <Sidebar
                isCollapsed={isCollapsed}
                toggleSidebar={toggleSidebar}
            />
            
            <div className={`
                flex-1 
                p-6 
                transition-all 
                duration-300 
                ${isCollapsed ? 'ml-20' : 'ml-64'}
            `}>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-emerald-500">Detail Verifikasi</h1>
                    <div className="ml-auto">
                        <button className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {transaksiDetail ? (
                        <div>
                            {/* Informasi Transaksi Utama */}
                            <div className="p-6 bg-gray-50 border-b">
                                <h2 className="text-xl font-semibold text-gray-700">Informasi Transaksi</h2>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <p className="text-sm text-gray-600">ID Transaksi</p>
                                        <p className="font-medium">{transaksiDetail.idTransaksi || 'Tidak tersedia'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Nama</p>
                                        <p className="font-medium">{transaksiDetail.nama}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Tanggal</p>
                                        <p className="font-medium">{transaksiDetail.tanggal}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Status</p>
                                        <p className="font-medium">
                                            <span className={`
                                                px-2 py-1 rounded-full text-xs 
                                                ${transaksiDetail.status === 'Sukses' ? 'bg-green-100 text-green-800' : 
                                                  transaksiDetail.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                                  'bg-red-100 text-red-800'}
                                            `}>
                                                {transaksiDetail.status}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {transaksiDetail.jenisSampah && transaksiDetail.jenisSampah.length > 0 ? (
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Detail Sampah</h2>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Jenis Sampah
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Quantity
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {transaksiDetail.jenisSampah.map((jenis, index) => (
                                                <tr key={index} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {jenis}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {transaksiDetail.quantity[index] || 'Tidak tersedia'}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="p-6 text-center text-gray-500">
                                    <p>Tidak ada data sampah untuk transaksi ini.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-6 text-center text-gray-500">
                            <p>Transaksi dengan ID {idTransaksi} tidak ditemukan.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailVerifikasi;