import React from 'react'
import Sidebar from '../../components/Sidebar'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Searchbar from '../../components/Searchbar';

const Product = () => {
  return (
    <Sidebar>
      <Searchbar />
      <div className='w-full bg-gray-300 mt-[16px] flex justify-between'>
        <div className='flex gap-4'>
          <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
            ເມນູທັງໝົດ
          </button>
          <button className='text-gray-800 bg-white px-[24px] py-[8px] rounded-md'>
            ເມນູທັງໝົດ
          </button>
        </div>
        <div>
          button
        </div>
      </div>
    </Sidebar>
  )
}

export default Product