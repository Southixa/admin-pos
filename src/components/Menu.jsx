import React from 'react'
import { RiHandCoinLine } from 'react-icons/ri'

const Menu = ({ icon, title, isActive }) => {

  if(isActive){
    return (
        <div className='w-full mt-2 bg-green-500 rounded-full flex gap-4 py-[8px] pl-[40px] items-center'>
            <div className='w-[32px] h-[32px] flex justify-center items-center'>
                <RiHandCoinLine className='text-white text-[24px]' />
            </div>
            <p className='text-white'>ເມນູ</p>
        </div>
    )
  }

  return (
    <div className='w-full bg-gray-200 rounded-full flex gap-4 py-[8px] pl-[40px] items-center'>
        <div className='w-[32px] h-[32px] flex justify-center items-center'>
            <RiHandCoinLine className='text-green-500 text-[24px]' />
        </div>
        <p>ເມນູ</p>
    </div>
  )
}

export default Menu