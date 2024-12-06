import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { useTable, usePagination } from 'react-table';

function Verifikasi() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const cleanProps = (props) => {
        const { key, ...cleanedProps } = props;
        return cleanedProps;
    };

    const createUniqueKey = (prefix, item, index) => {
        return `${prefix}-${item.idTransaksi || item.id || index}`;
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

    const data = useMemo(() => [
        { 
            id: 1, 
            nama: 'John Doe', 
            tanggal: '01-01-2023', 
            status: 'Sukses',
            idTransaksi: 'TR001',
            jenisSampah: ['Plastik', 'Kertas'], 
            quantity: [10, 5]
        },
        { 
            id: 2, 
            nama: 'Jane Smith', 
            tanggal: '02-01-2023', 
            status: 'Pending',
            idTransaksi: 'TR002',
            jenisSampah: [], 
            quantity: []
        },
        { 
            id: 3, 
            nama: 'Alice Johnson', 
            tanggal: '03-01-2023', 
            status: 'Gagal',
            idTransaksi: 'TR003',
            jenisSampah: ['Logam'], 
            quantity: [15]
        },
        // Tambahkan lebih banyak data untuk menguji pagination
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 4,
            nama: `User  ${i + 4}`,
            tanggal: `0${(i + 4) % 12 + 1}-01-01-2023`,
            status: ['Sukses', 'Pending', 'Gagal'][i % 3],
            idTransaksi: `TR00${i + 4}`, // ID transaksi unik
            jenisSampah: i % 2 === 0 ? ['Kertas'] : [], // Contoh data
            quantity: i % 2 === 0 ? [i + 1] : [] // Contoh quantity
        }))
    ], []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID Transaksi',
                accessor: 'idTransaksi',
            },
            {
                Header: 'Nama',
                accessor: 'nama',
            },
            {
                Header: 'Tanggal',
                accessor: 'tanggal',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ value }) => (
                    <span className={`
                        px-2 py-1 rounded-full text-xs 
                        ${value === 'Sukses' ? 'bg-green-100 text-green-800' : 
                          value === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}
                    `}>
                        {value}
                    </span>
                )
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        usePagination
    );


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
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-emerald-500">Verifikasi</h1>
                <div className="relative" ref={dropdownRef}>
                    
                    <button 
                        onClick={toggleDropdown}
                        className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                            />
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
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                    <table {...cleanProps(getTableProps())} className="min-w-full border-collapse">
                                <thead className="bg-gray-100">
                                    {headerGroups.map((headerGroup, headerGroupIndex) => (
                                        <tr 
                                            key={createUniqueKey('header-group', headerGroup, headerGroupIndex)}
                                            {...cleanProps(headerGroup.getHeaderGroupProps())}
                                        >
                                            {headerGroup.headers.map((column, columnIndex) => {
                                                const columnProps = cleanProps(column.getHeaderProps());
                                                return (
                                                    <th 
                                                        key={createUniqueKey(`header-${headerGroupIndex}`, column, columnIndex)}
                                                        {...columnProps}
                                                        className="border px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                    >
                                                        {column.render('Header')}
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody 
                                    key="table-body"
                                    {...cleanProps(getTableBodyProps())} 
                                    className="bg-white divide-y divide-gray-200"
                                >
                                    {page.map((row, rowIndex) => {
                                        prepareRow(row);
                                        const rowProps = cleanProps(row.getRowProps());

                                        return (
                                            <tr 
                                                key={createUniqueKey('row', row.original, rowIndex)}
                                                {...rowProps}
                                                className="hover:bg-gray-50 transition-colors cursor-pointer"
                                                onClick={() => navigate(`/detail/${row.original.idTransaksi}`, { 
                                                    state: { 
                                                        transaksiDetail: row.original 
                                                    } 
                                                })}
                                            >
                                                {row.cells.map((cell, cellIndex) => {
                                                    const cellProps = cleanProps(cell.getCellProps());
                                                    return (
                                                        <td 
                                                            key={createUniqueKey(`cell-${rowIndex}`, cell.column, cellIndex)}
                                                            {...cellProps}
                                                            className="px-4 py-2 text-sm"
                                                        >
                                                            {cell.render('Cell')}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                    <div className="flex space-x-2">
                        <button 
                            onClick={() => gotoPage(0)} 
                            disabled={!canPreviousPage}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {'<<'}
                        </button>
                        <button 
                            onClick={() => previousPage()} 
                            disabled={!canPreviousPage}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {'<'}
                        </button>
                        <button 
                            onClick={() => nextPage()} 
                            disabled={!canNextPage}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {'>'}
                        </button>
                        <button 
                            onClick={() => gotoPage(pageOptions.length - 1)} 
                            disabled={!canNextPage}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {'>>'}
                        </button>
                    </div>
                    <span className="text-sm text-gray-700">
                        Halaman{' '}
                        <strong>
                            {pageIndex + 1} dari {pageOptions.length}
                        </strong>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Verifikasi;