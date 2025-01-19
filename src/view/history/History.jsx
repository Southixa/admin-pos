import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { IoMenu } from 'react-icons/io5'
import { GetAllSalesApi } from '../../api/sale'

const History = () => {

  const [sales, setSales] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
      setLoading(true);
      const res = await GetAllSalesApi();
      if(!res) {
          Swal.fire({
              icon: "error",
              title: "ຜິດພາດ",
              text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
            });
          setLoading(false);
          return;
      }
      setSales(res);
      setLoading(false);
  }

  useEffect(() => {
      getData();
  }, [])


  return (
    <Sidebar>
        <div className='w-full flex justify-between gap-4'>
          <div className='flex-shrink-0'>
            <button className='bg-white p-[6px] rounded-md'>
              <IoMenu className='text-[28px] text-green-500' />
            </button>
          </div>
          <div className='flex gap-3'>
            <button className='bg-green-500 px-[24px] py-[8px] rounded-md'>
              ອໍເດີ້ທັງໝົດ
            </button>
            <button className='bg-white px-[24px] py-[8px] rounded-md text-green-500'>
              ອໍເດີ້ທັງໝົດ
            </button>
            <button className='bg-white px-[24px] py-[8px] rounded-md text-green-500'>
              ອໍເດີ້ທັງໝົດ
            </button>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='text-green-500'>ກຳນົດວັນເລີ່ມ</p>
            <input type='date' className='text-green-500 bg-white rounded-md px-2 py-2' />
            <p className='text-green-500'>ເຖິງວັນທີ</p>
            <input type='date' className='text-green-500 bg-white rounded-md px-2 py-2' />
          </div>
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
            </tr>
          </tbody>
        </table>
      </div>

    </Sidebar>
  )
}

export default History