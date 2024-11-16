import React from 'react'
import Logo from '../../public/images/logo.png'
import { RiHandCoinLine } from "react-icons/ri";

const Sidebar = ({ children }) => {
  return (
    <div className='w-full min-h-screen bg-gray-200 flex'>
        <div className='w-[260px] h-screen bg-white fixed z-10 px-[20px] py-[24px]'>
            <div className='w-full flex gap-2 items-center'>
                <div className='w-[48px] h-[48px] rounded-full bg-slate-400 overflow-hidden'>
                    <img src={Logo} className='w-full h-full object-cover' />
                </div>
                <p className='text-[20px]'>ຂາໄກ່ເຈ້ຕຸ້ຍ</p>
            </div>
            <div className='mt-10'>
                <div className='w-full bg-gray-200 rounded-full flex gap-4 py-[8px] pl-[40px] items-center'>
                    <div className='w-[32px] h-[32px] flex justify-center items-center'>
                        <RiHandCoinLine className='text-green-500 text-[24px]' />
                    </div>
                    <p>ເມນູ</p>
                </div>
                <div className='w-full mt-2 bg-green-500 rounded-full flex gap-4 py-[8px] pl-[40px] items-center'>
                    <div className='w-[32px] h-[32px] flex justify-center items-center'>
                        <RiHandCoinLine className='text-white text-[24px]' />
                    </div>
                    <p className='text-white'>ເມນູ</p>
                </div>
            </div>
        </div>
        <div className='w-[260px] h-screen bg-green-200'>
        </div>
        <div className='h-[1000px] flex-grow bg-gray-400'>

        </div>
    </div>
  )
}

export default Sidebar