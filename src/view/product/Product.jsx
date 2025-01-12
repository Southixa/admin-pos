import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Searchbar from '../../components/Searchbar';
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { DeleteProductApi, GetAllProductsApi } from '../../api/product';
import { formatCurrency } from '../../helpers';
import Swal from 'sweetalert2';

const Product = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
      setLoading(true);
      const res = await GetAllProductsApi();
      if(!res) {
          Swal.fire({
              icon: "error",
              title: "ຜິດພາດ",
              text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
            });
          setLoading(false);
          return;
      }
      setProducts(res);
      setLoading(false);
  }

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
              const res = await DeleteProductApi(id);
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
              await getData();
          }
        });
  }

  useEffect(() => {
      getData();
  }, [])

  return (
    <Sidebar>
      <Searchbar />
      <div className='w-full mt-[16px] flex justify-between'>
        <div className='flex gap-4'>
          <button className='text-white bg-green-500 px-[24px] py-[8px] rounded-md'>
            ເມນູທັງໝົດ
          </button>
          <Link to="/product/category" >
            <button className='text-gray-800 bg-white px-[24px] py-[8px] rounded-md'>
              ໝວດໝູ່
            </button>
          </Link>
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
            {products.map((item, index) => (
              <tr key={index} className='border-b border-gray-500'>
                <td>{index + 1}</td>
                <td className='py-[8px]'>
                  <div className='w-[60px] h-[60px] bg-gray-400'>
                    <img src={item.image} alt={item.name} className='w-full h-full object-cover' /> 
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.menuName}</td>
                <td>{formatCurrency(item.price)} ກີບ</td>
                <td className='w-[150px]'>
                  <button className='px-[16px] py-[4px] bg-green-500 rounded-md text-white'>
                    ແກ້ໄຂ
                  </button>
                </td>
                <td className='w-[150px]'>
                  <button onClick={() => handleDelete(item.menuID)} className='px-[24px] py-[4px] bg-red-500 rounded-md text-white'>
                    ລົບ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar>
  )
}

export default Product