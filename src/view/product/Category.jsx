import React from 'react'
import Sidebar from '../../components/Sidebar'
import Searchbar from '../../components/Searchbar'
import { Link } from 'react-router-dom'
import noodles from '../../../public/images/noodles.png'
import { FaPlus } from "react-icons/fa";

const Category = () => {

    const categoryList = [
        {
            icon: noodles,
            name: "ທອດ"
        },
        {
            icon: noodles,
            name: "ທອດ"
        },
        {
            icon: noodles,
            name: "ທອດ"
        },
    ]

  return (
    <Sidebar>
        <Searchbar />
        <div className='w-full mt-[16px] flex justify-between'>
            <div className='flex gap-4'>
                <Link to="/product" >
                    <button className='text-gray-800 bg-white px-[24px] py-[8px] rounded-md'>
                        ເມນູທັງໝົດ
                    </button>
                </Link>
                <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
                    ໝວດໝູ່
                </button>
            </div>
        </div>
        <div className='w-full mt-[16px] flex gap-4 flex-wrap'>
            {categoryList.map((item, index) => (
                <div className='w-[130px] bg-white rounded-2xl overflow-hidden shadow-sm'>
                    <div className='w-full h-[90px] pt-[20px] pl-[20px]'>
                        <div className='w-[60px] h-[60px]'>
                            <img src={item.icon} alt=""  className='w-ful h-full object-contain' />
                        </div>
                    </div>
                    <div className='w-full h-[60px]  p-2'>
                        <p className=''>{item.name}</p>
                    </div>
                </div>
            ))}
            <div className='w-[130px] bg-white rounded-2xl overflow-hidden shadow-sm'>
                <div className='w-full h-[90px] flex justify-center items-center'>
                    <div className='w-[36px] h-[36px] bg-green-500 rounded-full flex justify-center items-center'>
                        <FaPlus className='text-white' />
                    </div>
                </div>
                <div className='w-full h-[60px]  p-2'>
                    <p className='text-center'>ເພີ່ມ</p>
                </div>
            </div>
        </div>
    </Sidebar>
  )
}

export default Category