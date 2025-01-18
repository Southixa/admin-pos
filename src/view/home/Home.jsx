import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import noodles from "../../assets/images/noodles.png";
import { FaBorderAll } from "react-icons/fa";
import burger from "../../assets/images/burger.jpg"
import { FaChevronRight } from "react-icons/fa";
import MenuDrawer from "../../components/MenuDrawer";
import { GetAllCategoriesApi } from "../../api/category";
import Swal from "sweetalert2";
import { GetAllProductsApi } from "../../api/product";
import { formatCurrency } from "../../helpers";

const Home = () => {

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([])

  const [selectedCategoryId, setSelectedCategoryId] = useState("")

  const filteredProductsByCategoryId = useMemo(() => {
      if(selectedCategoryId === "") return products
      return products.filter((product) => product.categoryID === selectedCategoryId)
  }, [products, selectedCategoryId])

  const getData = async () => {
      setLoading(true);
      const [resCategory, resProduct] = await Promise.all([
        GetAllCategoriesApi(),
        GetAllProductsApi()
      ]);
      if(!resCategory || !resProduct) {
          Swal.fire({
              icon: "error",
              title: "ຜິດພາດ",
              text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
            });
          setLoading(false);
          return;
      }
      setCategories(resCategory);
      setProducts(resProduct);
      setLoading(false);
  }

  useEffect(() => {
      getData();
  }, [])

  return (
    <Sidebar>
      <MenuDrawer />
      <div className="w-[1200px] min-h-[80px] overflow-x-scroll">
        <div className="flex gap-2">
          <div onClick={() => setSelectedCategoryId("")} className={`min-w-[130px] ${selectedCategoryId === "" ? "bg-green-200" : "bg-white"} rounded-2xl overflow-hidden shadow-sm`}>
              <div className="w-full h-[90px] pt-[20px] pl-[20px]">
                <div className="w-[60px] h-[60px] flex justify-center items-center">
                  <FaBorderAll className="text-[40px] text-gray-600" />
                </div>
              </div>
              <div className="w-full h-[60px]  p-2">
                <p className="">ທັງໝົດ</p>
              </div>
            </div>
          {categories.map((item, index) => (
            <div onClick={() => setSelectedCategoryId(item.categoryID)} key={index} className={`min-w-[130px] ${selectedCategoryId === item.categoryID ? "bg-green-200" : "bg-white"} rounded-2xl overflow-hidden shadow-sm`}>
              <div className="w-full h-[90px] pt-[20px] pl-[20px]">
                <div className="w-[60px] h-[60px]">
                  <img
                    src={item.icon}
                    alt={item.name}
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

        <div className="w-full mt-[20px] grid grid-cols-12 gap-10">
          {products.map((item, index) => (
            <div key={index} className="col-span-3 w-full min-h-[300px] bg-white rounded-2xl shadow-md p-[16px]">
              <div className="w-full h-[160px] bg-gray-200 rounded-md">
                <img src={item.image} alt="product" className="w-full h-full object-cover rounded-md" />
              </div>
              <p className="text-[20px] mt-2">{item.name}</p>
              <p className="mt-1 text-green-600">{formatCurrency(item.price)} ກີບ</p>
              <button className="w-full bg-green-400 rounded-md py-2 mt-2">ເພີ່ມເມນູ</button>
            </div>
          ))}
        </div>

    </Sidebar>
  );
};

export default Home;
