import React from 'react'
import Sidebar from '../../components/Sidebar'
import { FaChevronLeft } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";

const AddProduct = () => {
  return (
    <Sidebar>
        <div className='w-full'>
            <button className='bg-white p-[8px] rounded-md'>
                <FaChevronLeft className='text-green-500 text-[24px]' />
            </button>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
            <div className='w-[400px] bg-white rounded-sm p-[20px]'>
                <h3 className='text-center text-[20px] mt-[4px]'>ຮູບພາບ</h3>
                <div className='w-full flex justify-center items-center mt-[16px]'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-md flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] border-gray-300 rounded-sm border-dashed border-[3px] flex justify-center items-center'>
                            <CiCamera className='text-[48px] text-gray-300' />
                        </div>
                    </div>
                </div>
                <p className='mt-[16px] text-gray-600'>ຊື່ເມນູ</p>
                <input type='text' className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ຊື່ເມນູ...' />
                <p className='mt-[16px] text-gray-600'>ລາຄາ</p>
                <input type='number' className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ໃສ່ລາຄາ...' />
                <p className='mt-[16px] text-gray-600'>ໝວດໝູ່</p>
                <select className='w-full bg-green-500 text-white rounded-[12px] px-[16px] py-[8px] text-center'>
                    <option value="1">ທອດ</option>
                    <option value="2">ຕຳ</option>
                    <option value="3">ຍຳ</option>
                </select>
                <div className='w-full  mt-[70px] flex justify-between gap-4'>
                    <div className='w-full'>
                        <button className='text-green-500 border border-green-500 py-[10px] w-full rounded-[12px]'>ຍົກເລີກ</button>
                    </div>
                    <div className='w-full'>
                        <button className='text-white bg-green-500 py-[10px] w-full rounded-[12px]'>ບັນທຶກ</button>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
  )
}

export default AddProduct