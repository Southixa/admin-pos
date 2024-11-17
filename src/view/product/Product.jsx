import React from 'react'
import Sidebar from '../../components/Sidebar'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  return (
    <Sidebar>
      <div className='w-full bg-slate-300 flex justify-between gap-3'>
        <button className='bg-white p-[4px] rounded-md'>
          <IoMenu className='text-[28px] text-green-500' />
        </button>
        <div className='flex-grow relative'>
            <input type='text' className='w-full rounded-md py-[8px] pl-[42px]' placeholder='ຄົ້ນຫາເມນູຢູ່ນີ້...' />
            <div className='absolute top-[8px] left-[12px] w-[24px] h-[24px] flex justify-center items-center'>
              <CiSearch className='text-[20px] text-green-300' />
            </div>
        </div>
        <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
          ຄົ້ນຫາ
        </button>
      </div>
    </Sidebar>
  )
}

export default Product