import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'

const Searchbar = () => {
  return (
    <div className='w-full flex justify-between gap-3'>
        <div className='flex-shrink-0'>
          <button className='bg-white p-[6px] rounded-md'>
            <IoMenu className='text-[28px] text-green-500' />
          </button>
        </div>
        <div className='flex-grow relative'>
            <input type='text' className='w-full rounded-md py-[10px] pl-[42px] text-[14px] placeholder:text-green-300' placeholder='ຄົ້ນຫາເມນູຢູ່ນີ້...' />
            <div className='absolute top-[8px] left-[12px] w-[24px] h-[24px] flex justify-center items-center'>
              <CiSearch className='text-[20px] text-green-300' />
            </div>
        </div>
        <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
          ຄົ້ນຫາ
        </button>
      </div>
  )
}

export default Searchbar