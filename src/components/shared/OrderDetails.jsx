import React from 'react';
import { useLocation } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Import panah ke kanan dari react-icons
import Sidebar from './Sidebar';
import Headerdash from './Headerdash';

const OrderDetails = () => {
    const location = useLocation();
    const { state } = location;
    const { answers } = state || { answers: {} };

    // Define the questions and their corresponding text
    const questions = {
        3: "Apakah Anda merasa tidak berharga atau bersalah tanpa alasan yang jelas?",
        4: "Apakah Anda merasa lelah atau kehabisan energi sepanjang hari?",
        5: "Apakah Anda sering merasa gelisah atau cemas tanpa alasan yang jelas?",
        6: "Apakah Anda pernah mengalami masa di mana Anda merasa sangat sedih, kehilangan minat pada aktivitas yang biasanya Anda nikmati, dan sulit untuk merasa senang?",
        7: "Apakah Anda mengalami serangan panik secara tiba-tiba?",
        8: "Apakah Anda kesulitan tidur atau mengalami tidur berlebihan?",
        9: "Apakah Anda merasa ingin menghindari orang-orang atau situasi sosial?",
        10: "Apakah Anda mengalami gejala fisik seperti detak jantung cepat, gemetar, atau sesak napas ketika merasa cemas?",
    };

    return (
        <div className='overflow-scroll'>
            <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
                <Sidebar />
                <div className='p-4 flex flex-col flex-1'>
                    <Headerdash />
                    <div className='pt-4 px-4 pb-4'>
                        <div className='flex items-center mb-2'>
                            <h1 className='text-xl font-semibold mr-2'>Pasien Online</h1>
                            <HiArrowNarrowRight className='w-6 h-6 text-gray-500' />
                            <h1 className='text-xl font-semibold ml-2'>Keluhan Pasien</h1>
                        </div>
                        <div className='bg-white px-4 py-4 rounded-sm border border-gray-200'>
                            <h2 className='text-lg font-semibold mb-4'>Detail Keluhan Pasien</h2>
                            <table className='w-full text-center'>
                                <thead>
                                    <tr className='bg-gray-100'>
                                        <th className='p-2'>No</th>
                                        <th className='p-2'>Pertanyaan</th>
                                        <th className='p-2'>Jawaban</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(questions).map((key, index) => (
                                        <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className='p-2'>{index + 1}</td>
                                            <td className='p-2'>{questions[key]}</td>
                                            <td className='p-2'>{answers[key]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
