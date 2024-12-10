import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { firestore } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

function DetailVerifikasi() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [transaksiDetail, setTransaksiDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { idTransaksi: routeIdTransaksi } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.state?.transaksiDetail) {
          setTransaksiDetail(location.state.transaksiDetail);
        } else {
          const docRef = doc(firestore, 'transaksi', routeIdTransaksi);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setTransaksiDetail(docSnap.data());
          } else {
            console.error('Dokumen tidak ditemukan!');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [routeIdTransaksi, location.state]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleAction = async (action) => {
    try {
      const transaksiRef = doc(firestore, 'transaksi', routeIdTransaksi);
      await updateDoc(transaksiRef, {
        status: action === 'Verifikasi' ? 'Sukses' : 'Ditolak',
      });
      navigate('/verifikasi');
    } catch (error) {
      console.error('Error updating transaction status:', error);
      alert('Terjadi kesalahan saat memperbarui status transaksi. Silakan coba lagi.');
    } finally {
      setModalAction(null);
    }
  };

  const openModal = (action) => setModalAction(action);

  if (isLoading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  if (!transaksiDetail) {
    return (
      <div className="text-center p-6">
        <p>Transaksi dengan ID {routeIdTransaksi} tidak ditemukan.</p>
      </div>
    );
  }

  const {
    idTransaksi,
    jenisSampah = '',
    kuantitas = '',
    status,
    name,
    tanggal,
  } = transaksiDetail;

  const jenisSampahArray = jenisSampah ? jenisSampah.split(',') : [];
  const kuantitasArray = kuantitas
    ? kuantitas.split(',').map((q) => parseFloat(q))
    : Array(jenisSampahArray.length).fill(0);

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

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-gray-50 border-b">
            <h3 className="text-xl font-semibold text-gray-700">Informasi Transaksi</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-600">ID Transaksi</p>
                <p className="font-medium">{idTransaksi}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Nama</p>
                <p className="font-medium">{name || 'Tidak tersedia'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tanggal</p>
                <p className="font-medium">{tanggal || 'Tidak tersedia'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      status === 'Sukses'
                        ? 'bg-green-100 text-green-800'
                        : status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {status}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Detail Sampah</h3>
            {jenisSampahArray.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Sampah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kuantitas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jenisSampahArray.map((jenis, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{jenis}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {kuantitasArray[index] || 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">Tidak ada data sampah.</p>
            )}
          </div>

          {status === 'Pending' && (
            <div className="p-6 flex justify-center space-x-4">
              <button
                onClick={() => openModal('Verifikasi')}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Verifikasi
              </button>
              <button
                onClick={() => openModal('Tolak')}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
              >
                Tolak
              </button>
            </div>
          )}
        </div>

        {modalAction && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h2 className="text-xl mb-4 text-center">
                Apakah Anda yakin ingin {modalAction.toLowerCase()} transaksi ini?
              </h2>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleAction(modalAction)}
                  className={`px-4 py-2 rounded text-white transition ${
                    modalAction === 'Verifikasi' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                  }`}
                >
                  Ya, {modalAction}
                </button>
                <button
                  onClick={() => setModalAction(null)}
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
