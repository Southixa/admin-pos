import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import burger from "../../public/images/burger.jpg"
import Swal from 'sweetalert2'

const MenuDrawer = () => {

    const handleCancel = () => {
        Swal.fire({
            title: "ທ່ານຕ້ອງການຍົກເລີກອໍເດີ້ນີ້ແມ່ນບໍ່?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dd3333",
            cancelButtonColor: "#c1c1c1",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "ຍົກເລີກສຳເລັດ!",
                text: "ທ່ານໄດ້ຍົກເລີກອໍເລີກສຳເລັດ.",
                icon: "success"
              });
            }
          });
    }

    const handleConfirm = () => {
        Swal.fire({
            title: "ທ່ານຕ້ອງການຢືນຢັນການຊຳລະອໍເດີ້ນີ້ແມ່ນບໍ່?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#22c55e",
            cancelButtonColor: "#c1c1c1",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ"
          }).then((result) => {
            
          });
    }

  return (
    <div className='w-[400px] h-screen fixed bg-white z-50 top-0 right-0 shadow-md p-[16px]'>
          <div className="w-full">
            <div className="cursor-pointer size-[40px] rounded-md bg-gray-200 flex justify-center items-center">
              <FaChevronRight className="text-gray-600" />
            </div>
          </div>
          <div className="w-full bg-gray-100 mt-[20px] rounded-lg flex border border-gray-200">
            <button className="bg-green-300 border border-green-400 py-[8px] w-full rounded-lg">ກິນຢູ່ຮ້ານ</button>
            <button className=" py-[8px] w-full rounded-lg">ກັບບ້ານ</button>
          </div>
          <div className="w-full h-[300px]  mt-[40px] overflow-y-scroll">
            <div className='w-full bg-white flex justify-between gap-2 p-[8px] border border-gray-200 rounded-md'>
              <div className="size-[80px] bg-gray-800 rounded-md overflow-hidden">
                <img src={burger} alt='product' className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <p>ຊຸດຂາໄກ່</p>
                <p className="text-gray-500 text-[12px] mt-[14px] ml-[6px]">ຈຳນວນ</p>
                <div className="w-[100px] flex">
                    <button className="bg-red-500 rounded-full size-[24px] text-white">-</button>
                    <div className="min-w-[40px] flex justify-center items-center">
                      1
                    </div>
                    <button className="bg-green-500 rounded-full size-[24px] text-white">+</button>
                </div>
              </div>
              <div className="min-w-[100px] flex flex-col justify-between items-end">
                  <p className="text-[14px] text-gray-600">50,000 ກີບ</p>
                  <p className="text-[14px] text-gray-600">50,000 ກີບ</p>
              </div>
            </div>
          </div>

        <div className='w-full mt-[24px] min-h-[20px] flex gap-2'>
            <button className='w-full py-[8px] flex justify-center items-center gap-3 bg-green-300 border border-green-500 rounded-lg'>
                <div className='size-[10px] rounded-full border border-green-500 bg-white'></div>
                <p>ຈ່າຍເງິນສົດ</p>
            </button>
            <button className='w-full py-[8px] flex justify-center items-center gap-3 bg-white border border-gray-200 rounded-lg'>
                <div className='size-[10px] rounded-full border border-gray-300 bg-white'></div>
                <p>ຈ່າຍເງິນສົດ</p>
            </button>
        </div>
        <div className='w-full mt-[16px] rounded-lg bg-gray-200 px-[8px] py-[16px] flex justify-between'>
            <p>ລາຄາລວມ</p>
            <p>250,000 ກີບ</p>
        </div>
        <button onClick={()=>handleCancel()} className='w-full py-[10px] bg-red-500 text-white rounded-lg mt-[12px]'>ຍົກເລີກອໍເດີ</button>
        <button onClick={()=>handleConfirm()} className='w-full py-[10px] bg-green-500 text-white rounded-lg mt-[8px]'>ຊຳລະເງິນ</button>
      </div>
  )
}

export default MenuDrawer