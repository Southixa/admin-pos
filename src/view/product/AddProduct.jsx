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
            <div className='w-[400px] min-h-[600px] bg-white rounded-sm p-[20px]'>
                <h3 className='text-center text-[20px] mt-[4px]'>ຮູບພາບ</h3>
                <div className='w-full flex justify-center items-center mt-[16px]'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-md flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] border-gray-300 rounded-sm border-dashed border-[3px] flex justify-center items-center'>
                            <CiCamera className='text-[48px] text-gray-300' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
  )
}

export default AddProduct