import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { useTable, usePagination } from 'react-table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parse, format } from 'date-fns';
import penjemputanData from '../penjemputan.json'; 


function Penjemputan() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);

    // useEffect(() => {
    //     setStartDate(new Date());
    // }, []);

    const data = useMemo(() => penjemputanData.data, []);

    const filteredData = useMemo(() => {
        if (!startDate) return data;
        return data.filter(item => {
            // Parse tanggal dari format dd-mm-yyyy
            const itemDate = parse(item.tanggal, 'dd-MM-yyyy', new Date());
            const selectedDate = startDate;

            // Bandingkan tanggal
            return format(itemDate, 'dd-MM-yyyy') === format(selectedDate, 'dd-MM-yyyy');
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
                <div className="ml-auto">
                    <button className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
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
        </div>
    );
}

export default Penjemputan;