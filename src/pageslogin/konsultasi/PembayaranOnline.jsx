import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import gracia from './assets/gracia.jpg';
import { FaDollarSign, FaMapMarkerAlt, FaUserFriends, FaRegThumbsUp, FaBriefcase } from 'react-icons/fa';

const PesanOffline = () => {
  const [showOptions, setShowOptions] = useState(false); // State untuk mengontrol visibilitas pilihan
  const [selectedOption, setSelectedOption] = useState(null); // State untuk menyimpan pilihan radio
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Fungsi untuk mengubah state showOptions
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value); // Fungsi untuk mengubah state selectedOption
  };

  const handlePaymentSuccess = () => {
    alert('Pembayaran berhasil!');
    navigate('/');
  };

  const handleMetodePembayaranClick = () => {
    navigate('/MetodePembayaran'); // Navigasi ke halaman baru untuk menampilkan detail metode pembayaran
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        <h1 className='font-bold text-center pt-6'>Buat Janji</h1>
        <div className="bg-gray-100 mt-16 min-h-screen p-4 md:p-8">
          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Kolom 1 */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <img src={gracia} alt="Sertifikat 1" className="w-full h-auto rounded-lg" />
                  <h2 className="text-xl mt-4">Gracia Stephanie  S.Psi,. M.Psi</h2>
                  <div className="flex items-center mt-2">
                    <FaDollarSign className="mr-2" />
                    <p>Rp. 100.000</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <p>Komplek Cindelaras, Medan Amplas</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaUserFriends className="mr-2" />
                    <p>Online</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaRegThumbsUp className="mr-2" />
                    <p>98%</p>
                    <FaBriefcase className="ml-2" />
                    <p className="ml-1">6 Tahun Pengalaman</p>
                  </div>
                  <div className="flex flex-wrap mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md mb-2 mr-2">Anxiety</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md mb-2 mr-2">Bipolar</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md mb-2 mr-2">Depresi</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Hubungan dan Keluarga</button>
                    <p className="text-gray-600 mt-2">Seorang psikolog berpengalaman dengan 6 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti kecemasan, bipolar, hubungan dan keluarga.
                                                    Pendekatan berpusat pada individu dan keluarga.
                                                    Memiliki pengalaman dalam terapi anak dan remaja, trauma, depresi, gangguan makan, penyalahgunaan zat, dan lain-lain.</p>
                  </div>
                </div>
                {/* Kolom 3 */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h2 className="text-xl mb-4">Ringkasan Pesanan</h2>
                  <div className="flex flex-col space-y-4">
                <h2>Metode Pembayaran</h2>
                    <button
                     onClick={handleMetodePembayaranClick} 
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                      Tambah Metode Pembayaran
                    </button>
                  </div>
                  <div className="mt-4">
                    <p>Biaya Konsultasi : Rp 100.000</p>
                    <p>Biaya Layanan    : Rp 4.000</p>
                    <p>Pajak            : Rp 1.000</p>
                    <p>Pembayaranmu     : Rp 105.000</p>
                  </div>
                  <button 
                    onClick={handlePaymentSuccess} 
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PesanOffline;
