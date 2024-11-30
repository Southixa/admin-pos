import React from "react";
import Sidebar from "../../components/Sidebar";
import noodles from "../../../public/images/noodles.png";
import { FaBorderAll } from "react-icons/fa";
import burger from "../../../public/images/burger.jpg"
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  const categoryList = [
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
    {
      icon: noodles,
      name: "ທອດ",
    },
  ];

  const productList = [
    {
      image: burger,
      name: "ຊຸດຂາໄກ່",
      price: 50000,
    },
    {
      image: burger,
      name: "ຊຸດຂາໄກ່",
      price: 50000,
    },
    {
      image: burger,
      name: "ຊຸດຂາໄກ່",
      price: 50000,
    },
    {
      image: burger,
      name: "ຊຸດຂາໄກ່",
      price: 50000,
    }
  ]

  return (
    <Sidebar>
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
      </div>
      <div className="w-[1200px] min-h-[80px] overflow-x-scroll">
        <div className="flex gap-2">
          <div className="min-w-[130px] bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full h-[90px] pt-[20px] pl-[20px]">
                <div className="w-[60px] h-[60px] flex justify-center items-center">
                  <FaBorderAll className="text-[40px] text-gray-600" />
                </div>
              </div>
              <div className="w-full h-[60px]  p-2">
                <p className="">ທັງໝົດ</p>
              </div>
            </div>
          {categoryList.map((item, index) => (
            <div className="min-w-[130px] bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full h-[90px] pt-[20px] pl-[20px]">
                <div className="w-[60px] h-[60px]">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-ful h-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-[60px]  p-2">
                <p className="">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="w-full bg-gray-400 mt-[20px] grid grid-cols-12 gap-10">
          {productList.map((item, index) => (
            <div key={index} className="col-span-3 w-full min-h-[300px] bg-white rounded-2xl shadow-md p-[16px]">
              <div className="w-full h-[160px] bg-gray-200 rounded-md">
                <img src="" alt="product" />
              </div>
              <p className="text-[20px] mt-2">{item.name}</p>
              <p className="mt-1 text-green-600">{item.price} ກີບ</p>
              <button className="w-full bg-green-400 rounded-md py-2 mt-2">ເພີ່ມເມນູ</button>
            </div>
          ))}
        </div>

    </Sidebar>
  );
};

export default Home;
