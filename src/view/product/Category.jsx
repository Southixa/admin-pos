import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Searchbar from '../../components/Searchbar'
import { Link } from 'react-router-dom'
import noodles from '../../../public/images/noodles.png'
import { FaPlus } from "react-icons/fa";
import { DeleteCategoryApi, GetAllCategoriesApi } from '../../api/category'
import Loading from '../../components/Loading'
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Swal from 'sweetalert2'

const Category = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const handleDelete = async (id) => {
        Swal.fire({
            title: "ຢືນຢັນການລົບ",
            text: "ທ່ານຕ້ອງການລົບແທ້ ຫຼືື ບໍ່?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ລົບ",
            cancelButtonText: "ຍົກເລີກ"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await DeleteCategoryApi(id);
                if(!res) {
                    Swal.fire({
                    title: "ຜົດພາດ",
                    text: "ບໍສາມາດລົບຂໍ້ມູນໄດ້",
                    icon: "error"
                    });
                return;
                }
                Swal.fire({
                    title: "ສຳເລັດ",
                    text: "ລົບຂໍ້ມູນສຳເລັດ",
                    icon: "success"
                    });
            }
          });
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const res = await GetAllCategoriesApi();
            if(!res) {
                Swal.fire({
                    icon: "error",
                    title: "ຜິດພາດ",
                    text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
                  });
                setLoading(false);
                return;
            }
            setCategories(res);
            setLoading(false);
        }
        getData();
    }, [])

  return (
    <Sidebar>
        <Searchbar />
        <div className='w-full mt-[16px] flex justify-between'>
            <div className='flex gap-4'>
                <Link to="/product" >
                    <button className='text-gray-800 bg-white px-[24px] py-[8px] rounded-md'>
                        ເມນູທັງໝົດ
                    </button>
                </Link>
                <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
                    ໝວດໝູ່
                </button>
            </div>
        </div>
        {loading && (
            <div className='flex justify-center items-center w-full h-[50px]'>
                <Loading />
            </div>
        )}
        <div className='w-full mt-[16px] flex gap-4 flex-wrap'>
            {categories.map((item, index) => (
                <div key={index} className='w-[130px] bg-white rounded-2xl overflow-hidden shadow-sm'>
                    <div className='w-full h-[90px] pt-[20px] pl-[20px] relative'>
                        <div className='w-[60px] h-[60px]'>
                            <img src={item.icon} alt=""  className='w-ful h-full object-contain' />
                        </div>
                        <div className='absolute top-[8px] right-[8px] flex gap-2'>
                            <button className='p-[3px] bg-gray-200 rounded-sm'>
                                <FaPen className='text-gray-500 text-[14px]' />
                            </button>
                            <button onClick={() => handleDelete(item.categoryID)} className='p-[3px] bg-gray-200 rounded-sm'>
                                <FaTrash className='text-red-500 text-[14px]' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-[60px]  p-2'>
                        <p className=''>{item.name}</p>
                    </div>
                </div>
            ))}
            <Link to="/product/category/add">
                <div className='w-[130px] bg-white rounded-2xl overflow-hidden shadow-sm'>
                    <div className='w-full h-[90px] flex justify-center items-center'>
                        <div className='w-[36px] h-[36px] bg-green-500 rounded-full flex justify-center items-center'>
                            <FaPlus className='text-white' />
                        </div>
                    </div>
                    <div className='w-full h-[60px]  p-2'>
                        <p className='text-center'>ເພີ່ມ</p>
                    </div>
                </div>
            </Link>
        </div>
    </Sidebar>
  )
}

export default Category