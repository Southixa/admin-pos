import React from "react";
import Sidebar from "../../components/Sidebar";
import noodles from "../../../public/images/noodles.png";
import { FaBorderAll } from "react-icons/fa";

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

  return (
    <Sidebar>
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
            <div className="col-span-3 w-full min-h-[300px] bg-white rounded-2xl shadow-md p-[16px]">
              <div className="w-full h-[160px] bg-gray-200 rounded-md">
                <img src="" alt="product" />
              </div>
              <p className="text-[20px] mt-2">ຊຸດຂາໄກ່</p>
              <p className="mt-1 text-green-600">50,000 ກີບ</p>
              <button className="w-full bg-green-400 rounded-md py-2 mt-2">ເພີ່ມເມນູ</button>
            </div>
        </div>

    </Sidebar>
  );
};

export default Home;
