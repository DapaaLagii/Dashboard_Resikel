import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function DetailVerifikasi() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showVerifikasiModal, setShowVerifikasiModal] = useState(false);
  const [showTolakModal, setShowTolakModal] = useState(false);
  const { idTransaksi } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const transaksiDetail = location.state?.transaksiDetail;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAction = (action) => {
    console.log(`${action} transaksi`, idTransaksi);
    navigate('/verifikasi');
  };

  const handleVerifikasi = () => handleAction('Verifikasi');
  const handleTolak = () => handleAction('Tolak');

  return (
    <div
      className="flex"
      style={{
        backgroundImage: 'url(../images/bg.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <h2 className="text-2xl font-bold text-emerald-500">Detail Verifikasi</h2>

        {transaksiDetail ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-gray-50 border-b">
              <h3 className="text-xl font-semibold text-gray-700">Informasi Transaksi</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-600">ID Transaksi</p>
                  <p className="font-medium">{transaksiDetail.idTransaksi}</p>
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
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        transaksiDetail.status === 'Sukses'
                          ? 'bg-green-100 text-green-800'
                          : transaksiDetail.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {transaksiDetail.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {transaksiDetail.jenisSampah && transaksiDetail.jenisSampah.length > 0 ? (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Detail Sampah</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jenis Sampah
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaksiDetail.jenisSampah.map((jenis, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {jenis}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaksiDetail.quantity[index]}
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

            {transaksiDetail.status === 'Pending' && (
              <div className="p-6 flex justify-center space-x-4">
                <button
                  onClick={handleVerifikasi}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                  aria-label="Verifikasi Transaksi"
                >
                  Verifikasi
                </button>
                <button
                  onClick={handleTolak}
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                  aria-label="Tolak Transaksi"
                >
                  Tolak
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            <p>Transaksi dengan ID {idTransaksi} tidak ditemukan.</p>
          </div>
        )}

        {/* Verifikasi Modal */}
        {showVerifikasiModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h2 className="text-xl mb-4 text-center">
                Apakah Anda yakin ingin memverifikasi transaksi ini?
              </h2>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleVerifikasi}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Ya, Verifikasi
                </button>
                <button
                  onClick={() => setShowVerifikasiModal(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tolak Modal */}
        {showTolakModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h2 className="text-xl mb-4 text-center">
                Apakah Anda yakin ingin menolak transaksi ini?
              </h2>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleTolak}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Ya, Tolak
                </button>
                <button
                  onClick={() => setShowTolakModal(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailVerifikasi;