import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { useTable, usePagination } from 'react-table';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Verifikasi() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Firebase hooks to fetch transaction data
  const transaksiRef = collection(firestore, 'transaksi');
  const [transactionSnapshot] = useCollection(transaksiRef);

  // Map transaction snapshot to an array of data
  const transactionData = useMemo(() => {
    return (
      transactionSnapshot?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) || []
    );
  }, [transactionSnapshot]);

  // Optimized fetching of user data
  useEffect(() => {
    const fetchUserData = async () => {
      const uniqueUserIds = [...new Set(transactionData.map((t) => t.idUser).filter(Boolean))];
      if (uniqueUserIds.length === 0) return;

      try {
        const userQuery = query(collection(firestore, 'users'), where('__name__', 'in', uniqueUserIds));
        const userSnapshots = await getDocs(userQuery);

        const users = {};
        userSnapshots.forEach((doc) => {
          users[doc.id] = doc.data().name;
        });

        setUserData(users);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [transactionData]);

  // Prepare table data
  const data = useMemo(() => {
    return transactionData.map((transaction) => ({
      id: transaction.id,
      name: userData[transaction.idUser] || 'Nama tidak tersedia',
      tanggal: transaction.tanggal?.toDate
        ? transaction.tanggal.toDate().toLocaleDateString('id-ID')
        : 'Tanggal tidak tersedia',
      status: transaction.status,
      idTransaksi: transaction.id,
    }));
  }, [transactionData, userData]);

  // Define table columns
  const columns = useMemo(
    () => [
      {
        Header: 'ID Transaksi',
        accessor: 'idTransaksi',
      },
      {
        Header: 'Nama',
        accessor: 'name',
      },
      {
        Header: 'Tanggal',
        accessor: 'tanggal',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              value === 'Sukses'
                ? 'bg-green-100 text-green-800'
                : value === 'Pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {value}
          </span>
        ),
      },
    ],
    []
  );

  // React Table hooks
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
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  // Logout logic
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

  // UI and rendering
  return (
    <div
      className="flex"
      style={{
        backgroundImage: 'url(./images/bg.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      <div
        className={`p-6 flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-emerald-500">Verifikasi</h1>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                <button
                  onClick={handleLogoutClick}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Logout Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h2 className="text-xl mb-4 text-center">
                Apakah Anda yakin ingin logout?
              </h2>
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

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table {...getTableProps()} className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup) => {
              const { key: headerKey, ...headerGroupProps } = headerGroup.getHeaderGroupProps(); // Pisahkan key
              return (
                <tr key={headerKey} {...headerGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key: columnKey, ...columnProps } = column.getHeaderProps(); // Pisahkan key
                    return (
                      <th
                        key={columnKey} // Tetapkan key langsung
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
            {page.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...rowProps } = row.getRowProps(); // Pisahkan key
              return (
                <tr
                  key={rowKey} 
                  {...rowProps}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() =>
                    navigate(`/detail/${row.original.idTransaksi}`, {
                      state: { transaksiDetail: row.original },
                    })
                  }
                >
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps(); // Pisahkan key
                    return (
                      <td
                        key={cellKey} // Tetapkan key langsung
                        {...cellProps} // Sebarkan properti lainnya
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

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="px-3 py-1 border rounded-md text-sm font-medium disabled:opacity-50"
            >
              {'<<'}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="px-3 py-1 border rounded-md text-sm font-medium disabled:opacity-50"
            >
              {'<'}
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-3 py-1 border rounded-md text-sm font-medium disabled:opacity-50"
            >
              {'>'}
            </button>
            <button
              onClick={() => gotoPage(pageOptions.length - 1)}
              disabled={!canNextPage}
              className="px-3 py-1 border rounded-md text-sm font-medium disabled:opacity-50"
            >
              {'>>'}
            </button>
          </div>
          <span className="text-sm text-gray-700">
            Halaman {pageIndex + 1} dari {pageOptions.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Verifikasi;
