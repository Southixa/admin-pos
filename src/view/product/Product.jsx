import React from 'react'
import Sidebar from '../../components/Sidebar'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Searchbar from '../../components/Searchbar';
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Sidebar>
      <Searchbar />
      <div className='w-full mt-[16px] flex justify-between'>
        <div className='flex gap-4'>
          <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
            ເມນູທັງໝົດ
          </button>
          <button className='text-gray-800 bg-white px-[24px] py-[8px] rounded-md'>
            ໝວດໝູ່
          </button>
        </div>
        <div>
          <Link to="/product/add">
            <button className='flex items-center gap-2 bg-white px-[24px] py-[8px] rounded-md'>
              <IoAdd />
              <p>ເພີ່ມເມນູ</p>
            </button>
          </Link>
        </div>
      </div>

      <div className='w-full min-h-[300px] bg-white mt-[16px] rounded-sm p-2'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-800'>
              <td className='py-[4px]'>ລຳດັບ</td>
              <td>ຮູບພາບ</td>
              <td>ຊື່ເມນູ</td>
              <td>ໝວດໝູ່</td>
              <td>ລາຄາ</td>
              <td>ແກ້ໄຂ</td>
              <td>ລົບ</td>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-500'>
              <td>1</td>
              <td className='py-[8px]'>
                <div className='w-[60px] h-[60px] bg-gray-400'>

                </div>
              </td>
              <td>ທອດຂາໄກ່</td>
              <td>ທອດ</td>
              <td>250,000 ກີບ</td>
              <td className='w-[150px]'>
                <button className='px-[16px] py-[4px] bg-green-500 rounded-md text-white'>
                  ແກ້ໄຂ
                </button>
              </td>
              <td className='w-[150px]'>
                <button className='px-[24px] py-[4px] bg-red-500 rounded-md text-white'>
                  ລົບ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Sidebar>
  )
}

export default Product