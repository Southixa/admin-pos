import React, { useEffect, useState } from 'react'
import { GetOneProductApi } from '../api/product';
import { formatCurrency } from '../helpers';
import Swal from 'sweetalert2';

const SaleCardDetail = ({ id, amount = 0 }) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getData = async () => {
            const res = await GetOneProductApi(id);
            if(!res) {
                Swal.fire({
                    icon: "error",
                    title: "ຜິດພາດ",
                    text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
                  });
                return;
            }
            setProduct(res);
        }
        getData();
    }, [])

    if(!product?.menuID){
        return <></>
    }

  return (
    <div className='w-full bg-white flex justify-between gap-2 p-[8px] border border-gray-200 rounded-md'>
        <div className="size-[80px] bg-gray-800 rounded-md overflow-hidden">
            <img src={product?.image} alt='product' className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
            <p>{product?.menuName}</p>
            <p className="text-gray-500 text-[12px] mt-[14px] ml-[6px]">ຈຳນວນ</p>
            <div className="w-[100px] flex">
                <button className="bg-red-500 rounded-full size-[24px] text-white">-</button>
                <div className="min-w-[40px] flex justify-center items-center">
                {amount}
                </div>
                <button className="bg-green-500 rounded-full size-[24px] text-white">+</button>
            </div>
        </div>
        <div className="min-w-[100px] flex flex-col justify-between items-end">
            <p className="text-[14px] text-gray-600">{formatCurrency(product?.price)} ກີບ</p>
            <p className="text-[14px] text-gray-600">{formatCurrency(product?.price * amount)} ກີບ</p>
        </div>
    </div>
  )
}

export default SaleCardDetail