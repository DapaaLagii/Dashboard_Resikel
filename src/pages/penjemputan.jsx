import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { useTable, usePagination } from 'react-table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parse, format } from 'date-fns';
import { firestore } from '../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';


function Penjemputan() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [penjemputanData, setPenjemputanData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPenjemputanData = async () => {
            try {
                // Ambil data dari daftarPenjemputan
                const daftarPenjemputanRef = collection(firestore, 'daftarPenjemputan');
                const daftarPenjemputanSnapshot = await getDocs(daftarPenjemputanRef);

                // Siapkan array untuk menyimpan data lengkap
                const completeData = [];

                // Loop through setiap dokumen di daftarPenjemputan
                for (const docSnap of daftarPenjemputanSnapshot.docs) {
                    const penjemputanData = docSnap.data();
                    
                    // Ambil data user
                    const userRef = doc(firestore, 'users', penjemputanData.idUser);
                    const userSnap = await getDoc(userRef);
                    const userData = userSnap.exists() ? userSnap.data() : {};

                    // Ambil data jadwal penjemputan
                    const jadwalRef = doc(firestore, 'jadwalPenjemputan', penjemputanData.idPenjemputan);
                    const jadwalSnap = await getDoc(jadwalRef);
                    const jadwalData = jadwalSnap.exists() ? jadwalSnap.data() : {};

                    // Format tanggal
                    const tanggalFormatted = jadwalData.tanggal 
                        ? jadwalData.tanggal.toDate().toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        }) 
                        : 'Tanggal tidak tersedia';

                    // Gabungkan semua data
                    completeData.push({
                        id: docSnap.id,
                        nama: userData.name || 'Nama tidak tersedia',
                        alamat: penjemputanData.alamat || 'Alamat tidak tersedia',
                        tanggal: tanggalFormatted,
                        status: penjemputanData.status || 'Status tidak tersedia'
                    });
                }

                setPenjemputanData(completeData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching penjemputan data:", error);
                setIsLoading(false);
            }
        };

        fetchPenjemputanData();
    }, []);
// Modifikasi data untuk react-table
const data = useMemo(() => penjemputanData, [penjemputanData]);

const filteredData = useMemo(() => {
    if (!startDate) return data;
    return data.filter(item => {
        const itemDate = parse(item.tanggal, 'dd/MM/yyyy', new Date());
        const selectedDate = startDate;
        return format(itemDate, 'dd/MM/yyyy') === format(selectedDate, 'dd/MM/yyyy');
    });
}, [data, startDate]);

    const columns = useMemo(
        () => [
            { Header: 'Nama', accessor: 'nama' },
            { Header: 'Alamat', accessor: 'alamat' },
            { Header: 'Tanggal', accessor: 'tanggal' },
            { Header: 'Status', accessor: 'status' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        canPreviousPage,
        canNextPage,
        page,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: filteredData,
            initialState: { pageIndex: 0 },
        },
        usePagination
    );

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogoutClick = () => {
        setIsDropdownOpen(false);
        setShowLogoutModal(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin');
    };

    const handleCancelLogout = () => {
        setShowLogoutModal(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Tambahkan loading state di render
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    return (
        <div className="flex" style={{ backgroundImage: 'url(./images/bg.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
            <Sidebar
                isCollapsed={isCollapsed}
                toggleSidebar={toggleSidebar}
            />
            <div className={`flex-1 p-6 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
                <div className="flex items-center mb-4 relative">
                    <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium">Tanggal:</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                            }}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="Pilih Tanggal"
                            isClearable
                            className="w-[100px] p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <h1 className="text-3xl font-bold absolute left-1/2 transform -translate-x-1/2 text-emerald-500">Penjemputan</h1>
                    <div className="ml-auto relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border">
                                <div className="py-2">
                                    <button
                                        onClick={handleLogoutClick}
                                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table {...getTableProps()} className="min-w-full border-collapse">
                        <thead className="bg-gray-100">
                        {headerGroups.map(headerGroup => {
                            const { key, ...headerGroupProps } = headerGroup.getHeaderGroupProps();
                            return (
                                <tr key={key} {...headerGroupProps}>
                                    {headerGroup.headers.map(column => {
                                        const { key, ...columnProps } = column.getHeaderProps();
                                        return (
                                            <th 
                                                key={key}
                                                {...columnProps} 
                                                className="border px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                {column.render('Header')}
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        </thead>
                        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                        {page.length > 0 ? (
                            page.map(row => {
                                prepareRow(row);
                                const { key, ...rowProps } = row.getRowProps();
                                return (
                                    <tr 
                                        key={row.original?.id || row.id || key} 
                                        {...rowProps} 
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        {row.cells.map(cell => {
                                            const { key, ...cellProps } = cell.getCellProps();
                                            return (
                                                <td 
                                                    key={key}
                                                    {...cellProps} 
                                                    className="px-4 py-2 text-sm"
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="px-4 py-2 text-center text-gray-500">
                                    Tidak ada data untuk ditampilkan.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                    <div className="flex space-x-2">
                        <button 
                            onClick={() => gotoPage(0)} 
                            disabled={!canPreviousPage}
                            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
                        >
                            {'<<'}
                        </button>
                        <button 
                            onClick={() => previousPage()} 
                            disabled={!canPreviousPage}
                            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
                        >
                            {'<'}
                        </button>
                        <button 
                            onClick={() => nextPage()} 
                            disabled={!canNextPage}
                            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
                        >
                            {'>'}
                        </button>
                        <button 
                            onClick={() => gotoPage(rows.length - 1)} 
                            disabled={!canNextPage}
                            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
                        >
                            {'>>'}
                        </button>
                    </div>
                    <span className="text-sm text-gray-600">
                        Halaman{' '}
                        <strong>
                            {pageIndex + 1} dari {Math.ceil(filteredData.length / pageSize)}
                        </strong>
                    </span>
                </div>
            </div>

            {/* Modal Konfirmasi Logout */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                        <h2 className="text-xl mb-4 text-center">Apakah Anda yakin ingin logout?</h2>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                            <button
                                onClick={handleCancelLogout}
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Penjemputan;
