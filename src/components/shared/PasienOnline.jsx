import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiDownload, HiOutlineChat, HiOutlinePencilAlt } from 'react-icons/hi';
import Sidebar from './Sidebar';
import Headerdash from './Headerdash';

const recentOrderData = [
    {
        id: '1',
        product_id: '12345678',
        customer_name: 'Putri Selena',
        no_telpon: '081234567898',
        tgl_pendaftaran: '10 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Sedang Berlangsung',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '2',
        product_id: '12345678',
        customer_name: 'Usna Isnaini',
        no_telpon: '081234567898',
        tgl_pendaftaran: '08 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '3',
        product_id: '12345678',
        customer_name: 'Adriana',
        no_telpon: '081234567898',
        tgl_pendaftaran: '06 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '4',
        product_id: '12345678',
        customer_name: 'Roy Gabriel',
        no_telpon: '081234567898',
        tgl_pendaftaran: '03 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '5',
        product_id: '12345678',
        customer_name: 'Michella Putri',
        no_telpon: '081234567898',
        tgl_pendaftaran: '01 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '6',
        product_id: '12345678',
        customer_name: 'Helena Patricia',
        no_telpon: '081234567898',
        tgl_pendaftaran: '28 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '7',
        product_id: '12345678',
        customer_name: 'Mey Lorensia',
        no_telpon: '081234567898',
        tgl_pendaftaran: '25 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '8',
        product_id: '12345678',
        customer_name: 'Boy Pradipta',
        no_telpon: '081234567898',
        tgl_pendaftaran: '15 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '9',
        product_id: '12345678',
        customer_name: 'Glen Putra',
        no_telpon: '081234567898',
        tgl_pendaftaran: '10 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    },
    {
        id: '10',
        product_id: '12345678',
        customer_name: 'Shakira Anindita',
        no_telpon: '081234567898',
        tgl_pendaftaran: '15 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
        answers: { 3: 'Ya', 4: 'Tidak', 5: 'Ya' }
    }
];

function RecentOrders() {
    const [showModal, setShowModal] = useState(false); // State untuk mengontrol tampilan modal
    const [selectedOrder, setSelectedOrder] = useState(null); // State untuk menyimpan detail pesanan yang dipilih

    const handleEditClick = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleDownload = () => {
        // Implement download logic here if needed
        alert('Downloading recent orders...');
    };

    return (
        <div className='overflow-scroll'>
            <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
                <Sidebar />
                <div className='p-4 flex flex-col flex-1'>
                    <Headerdash />
                    <div className='pt-4 px-4 pb-4 text-xl'>
                        <h2>Pasien Online</h2>
                    </div>
                    <div className='pt-4 px-4 pb-4 text-xl'></div>
                    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1'>
                        <div className='flex justify-between items-center mb-3'>
                            <h2 className='text-lg font-semibold'></h2>
                            <button
                                className='flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                                onClick={handleDownload}
                            >
                                <HiDownload className='w-6 h-6 mr-2' />
                                Unduh Laporan
                            </button>
                        </div>
                        <table className='w-full text-center'>
                            <thead>
                                <tr>
                                    <th className='p-2'>No</th>
                                    <th className='p-2'>No Rekam Medis</th>
                                    <th className='p-2'>Nama Pasien</th>
                                    <th className='p-2'>No Telepon</th>
                                    <th className='p-2'>Tanggal Pendaftaran</th>
                                    <th className='p-2'>Paket</th>
                                    <th className='p-2'>Keluhan</th>
                                    <th className='p-2'>Catatan</th>
                                    <th className='p-2'>Status</th>
                                    <th className='p-2'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrderData.map((order) => (
                                    <tr key={order.id} className='border-b'>
                                        <td className='p-2'>{order.id}</td>
                                        <td className='p-2'>{order.product_id}</td>
                                        <td className='p-2'>{order.customer_name}</td>
                                        <td className='p-2'>{order.no_telpon}</td>
                                        <td className='p-2'>{order.tgl_pendaftaran}</td>
                                        <td className='p-2'>{order.order_paket}</td>
                                        <td className='p-2'>
                                            <Link to={`/order/${order.id}`} state={{ answers: order.answers }} className="text-green-500">
                                                {order.keluhan}
                                            </Link>
                                        </td>
                                        <td className='p-2'>{order.catatan}</td>
                                        <td className='p-2 text-blue-500'>{order.status}</td>
                                        <td className='p-2 flex justify-center space-x-2'>
                                        <Link to={'/Pesan'}>
                                                <HiOutlineChat className='w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700' />
                                            </Link>
                                            <HiOutlinePencilAlt
                                                className='w-6 h-6 text-yellow-500 cursor-pointer hover:text-yellow-700'
                                                onClick={() => handleEditClick(order)} // Panggil fungsi handleEditClick saat ikon diklik
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal atau popup */}
            {showModal && selectedOrder && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 max-w-2xl w-full"> {/* Menyesuaikan max-w-2xl agar lebih besar */}
                    <h2 className="text-xl font-semibold mb-4">Edit Data</h2>
                        <br></br>
                        <h2>Catatan</h2>
                        <br></br>
                        <p>
                        Selama sesi pesan, John menulis dengan nada yang mencerminkan kegelisahan.</p>
                        <p>
                        Penggunaan kalimat pendek dan sering mengekspresikan kebingungan atau frustasi.</p>
                        <p>
                        Tidak ada indikasi delusi atau halusinasi berdasarkan teks yang diterima.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
                                onClick={closeModal}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecentOrders;