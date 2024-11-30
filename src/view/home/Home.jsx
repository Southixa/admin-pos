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
    </Sidebar>
  );
};

export default Home;
