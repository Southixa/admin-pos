import React from 'react'
import Logo from '../../public/images/logo.png'
import { RiHandCoinLine } from "react-icons/ri";
import { LuFileClock } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { BsPersonGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ children }) => {

    const { pathname } = useLocation();
    const prefixPathname = "/" + pathname.split("/")[1];


    function isActive(path) {
        return path === prefixPathname;
    }

    const menuList = [
        {
            icon: <RiHandCoinLine />,
            title: "ເມນູ",
            path: "/"
        },
        {
            icon: <LuFileClock />,
            title: "ປະຫວັດການຂາຍ",
            path: "/history"
        },
        {
            icon: <FiFileText />,
            title: "ຈັດການເມນູ",
            path: "/product"
        },
        {
            icon: <BsPersonGear />,
            title: "ຈັດການພະນັກງານ",
            path: "/staff"
        },
    ]

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
                {menuList.map((item, index)=>(
                    <Menu key={index} icon={item.icon} title={item.title} isActive={isActive(item.path)} path={item.path} />
                ))}
            </div>
            <div className='mt-[150px]'>
                <Link to="/login">
                    <div className='w-full flex items-center gap-4'>
                        <div className='w-[32px] h-[32px] flex justify-center items-center'>
                            <RxExit className='text-green-500 text-[20px]' />
                        </div>
                        <p className='text-green-500'>ອອກຈາກລະບົບ</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className='w-[260px] h-screen bg-green-200'>
        </div>
        <div className='min-h-screen flex-grow bg-gray-200 px-[20px] pt-[20px]'>
            <div className='w-full max-w-screen-xl mx-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Sidebar