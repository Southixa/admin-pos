import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { IoMenu } from 'react-icons/io5'
import { GetAllSalesApi } from '../../api/sale'
import { formatCurrency } from '../../helpers'

const History = () => {

  const [sales, setSales] = useState([])
  const [loading, setLoading] = useState(false)

  const [range, setRange] = useState("all")

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


  const filteredSales = useMemo(() => {
    if(range === "all") return sales;
    if(range === "day") return sales.filter((sale) => new Date(sale.createdAt).toDateString() === new Date().toDateString());
    if(range === "month") return sales.filter((sale) => new Date(sale.createdAt).getMonth() === new Date().getMonth());
  }, [sales, range])

  const getAllTotalSalesPrice = filteredSales.reduce((total, item) => total + item.priceTotal, 0);


  return (
    <Sidebar>
        <div className='w-full flex justify-between gap-4'>
          <div className='flex-shrink-0'>
            <button className='bg-white p-[6px] rounded-md'>
              <IoMenu className='text-[28px] text-green-500' />
            </button>
          </div>
          <div className='flex gap-3'>
            <button onClick={() => setRange("all")} className={`px-[24px] py-[8px] rounded-md ${ range === "all" ? "bg-green-500 text-white" : "bg-white text-green-500"}`}>
              ອໍເດີ້ທັງໝົດ
            </button>
            <button onClick={() => setRange("day")} className={`px-[24px] py-[8px] rounded-md ${ range === "day" ? "bg-green-500 text-white" : "bg-white text-green-500"}`}>
              ອໍເດີ້ມີ້ນີ້
            </button>
            <button onClick={() => setRange("month")} className={`px-[24px] py-[8px] rounded-md ${ range === "month" ? "bg-green-500 text-white" : "bg-white text-green-500"}`}>
              ອໍເດີ້ເດີອນນີ້
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
              <td>ກິນຢູ່</td>
              <td>ຈ່າຍເງິນ</td>
              <td>ລວມ</td>
              <td>ສະຖານະ</td>
              <td>ລາຍລະອຽດ</td>
            </tr>
          </thead>
          <tbody>
            {filteredSales.map((item, index) => (
              <tr key={index} className='border-b border-gray-500'>
                <td>{index + 1}</td>
                <td className='py-[20px]'>
                  {item.addressType}
                </td>
                <td>{item.paymentType}</td>
                <td>{formatCurrency(item.priceTotal)} ກີບ</td>
                <td>{item.status}</td>
                <td>{item.createdAt}</td>
                <td className='w-[150px]'>
                  <button className='px-[16px] py-[4px] bg-green-500 rounded-md text-white'>
                    ລາຍລະອຽດ
                  </button>
                </td>
              </tr>
            ))}
              <tr className='border-b border-gray-500'>
                <td>ຍອດລວມທັງໝົດ</td>
                <td className='py-[20px]'>
                </td>
                <td></td>
                <td>{formatCurrency(getAllTotalSalesPrice)} ກີບ</td>
                <td></td>
                <td className='w-[150px]'>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

    </Sidebar>
  )
}

export default History