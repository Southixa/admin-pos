import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaChevronLeft } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom';
import { GetOneSaleApi } from '../../api/sale';
import Logo from '../../assets/images/logo.png'
import { formatCurrency, timeFormatter } from '../../helpers';
import { GetAllSaleDetailsBySaleIdApi } from '../../api/saleDetail';
import Swal from 'sweetalert2';
import js from '@eslint/js';
import SaleCardDetail from '../../components/SaleCardDetail';

export const HistoryDetail = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [sale, setSale] = useState({});
    const [saleDetails, setSaleDetails] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const [resSale, resSaleDetails] = await Promise.all([
                GetOneSaleApi(id),
                GetAllSaleDetailsBySaleIdApi(id)
              ]);
            if(!resSale) {
                Swal.fire({
                    icon: "error",
                    title: "ຜິດພາດ",
                    text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
                  });
                return;
            }
            setSale(resSale);
            if(resSaleDetails) {
                setSaleDetails(resSaleDetails);
            }
        }
        getData();
    }, [])

  return (
    <Sidebar>
        <div className='w-full'>
            <button onClick={() => {navigate(-1)}} className='bg-white p-[8px] rounded-md'>
                <FaChevronLeft className='text-green-500 text-[24px]' />
            </button>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
            <div className='w-[400px] bg-white rounded-sm p-[20px]'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-[60px] h-[60px] rounded-md overflow-hidden'>
                            <img src={Logo} alt="logo" className='w-full h-full object-cover' />
                        </div>
                        <p className='text-[18px]'>ຂາໄກ່ເຈ້ຕຸ້ຍ</p>
                    </div>
                    <p>ວັນທີ: {timeFormatter(sale?.createdAt)}</p>
                </div>
                <div className='text-[12px] mt-[8px]'>
                    <p>ສະຖານທີ: ທົ່ງສາງນາງ</p>
                    <p>ເບີໂທຕິດຕໍ່: 020 91535495</p>
                </div>
                <div className='mt-8 min-h-[300px]'>
                    {saleDetails.map((item, index) => (
                        <div key={index}>
                            <SaleCardDetail amount={item?.amount} id={item?.menuID} />
                        </div>
                    ))}
                </div>
                <div className='w-full px-[12px] py-[12px] rounded-md bg-gray-200 flex justify-between'>
                    <p>ລາຄາລວມ</p>
                    <p>{formatCurrency(sale?.priceTotal)} ກີບ</p>
                </div>
                <div className='w-full px-[16px] py-[14px] bg-green-400 text-center rounded-md mt-4 text-white'>
                    <p>{sale?.paymentType}</p>
                </div>
            </div>
        </div>
    </Sidebar>
  )
}
