import React from 'react'
import Sidebar from '../../components/Sidebar'
import Searchbar from '../../components/Searchbar'

const Category = () => {
  return (
    <Sidebar>
        <Searchbar />
        <div className='w-full mt-[16px] flex justify-between'>
            <div className='flex gap-4'>
                <button className='text-gray-800 bg-white px-[24px] py-[8px] rounded-md'>
                    ເມນູທັງໝົດ
                </button>
                <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
                    ໝວດໝູ່
                </button>
            </div>
        </div>
    </Sidebar>
  )
}

export default Category