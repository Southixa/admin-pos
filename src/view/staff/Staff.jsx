import React from 'react'
import Sidebar from '../../components/Sidebar'
import Searchbar from '../../components/Searchbar'
import { Link } from 'react-router-dom'
import { IoAdd } from 'react-icons/io5'

const Staff = () => {
  return (
    <Sidebar>
        <Searchbar />
        <div className='w-full mt-[16px] flex justify-end'>
          <Link to="/product/add">
              <button className='flex items-center gap-2 bg-white px-[24px] py-[8px] rounded-md'>
                <IoAdd />
                <p>ເພີ່ມພະນັກງານ</p>
              </button>
            </Link>
        </div>

        <div className='w-full min-h-[300px] bg-white mt-[16px] rounded-sm p-2'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-800'>
              <td className='py-[4px]'>ລຳດັບ</td>
              <td>ຊື່</td>
              <td>ນາມສະກຸນ</td>
              <td>ເບີໂທ</td>
              <td>ສິດເຂົ້າໃຊ້</td>
              <td>ແກ້ໄຂ</td>
              <td>ລົບ</td>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-500'>
              <td>1</td>
              <td className='py-[20px]'>
                ສຸດທິຊາ
              </td>
              <td>ພິລາວົງ</td>
              <td>5567487</td>
              <td>Admin</td>
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

export default Staff