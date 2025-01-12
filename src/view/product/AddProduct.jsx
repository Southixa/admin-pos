import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaChevronLeft } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import UploadImage from '../../components/UploadImage';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationSchema } from '../../utils';
import { GetAllCategoriesApi } from '../../api/category';
import Swal from 'sweetalert2';
import { AddProductApi } from '../../api/product';
import Loading from '../../components/Loading';

const AddProduct = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

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

    useEffect(() => {
        getData();
    }, [])

    const handleAdd = async (value) => {
        const res = await AddProductApi(value.name, value.price, value.category, value.image);
        if(!res) {
            Swal.fire({
                icon: "error",
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດເພີ່ມຂໍ້ມູນໄດ້",
              });
            return;
        }
        Swal.fire({
            icon: "success",
            title: "ສຳເລັດ",
            text: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
        });
        navigate("/product")
    }

  return (
    <Sidebar>
        <div className='w-full'>
            <button onClick={() => {navigate(-1)}} className='bg-white p-[8px] rounded-md'>
                <FaChevronLeft className='text-green-500 text-[24px]' />
            </button>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
            <div className='w-[400px] bg-white rounded-sm p-[20px]'>
                <Formik
                validationSchema={validationSchema.product}
                enableReinitialize={true}
                initialValues={{
                    name: "",
                    price: "",
                    category: categories?.[0]?.categoryID || "",
                    image: null
                }}
                onSubmit={async (values) => {
                    await handleAdd(values)
                }}
                >
                    {({ errors, touched, isSubmitting, setFieldValue })=>(
                        <Form>
                            <h3 className='text-center text-[20px] mt-[4px]'>ຮູບພາບ</h3>
                            <div className='w-full flex justify-center items-center mt-[16px]'>
                                <UploadImage onChange={(file) => {
                                    setFieldValue("image", file);
                                }} />
                            </div>
                            <ErrorMessage component={"div"} className='text-red-500' name="image" />
                            <p className='mt-[16px] text-gray-600'>ຊື່ເມນູ</p>
                            <Field disabled={isSubmitting} type='text' name="name" className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ຊື່ເມນູ...' />
                            <ErrorMessage component={"div"} className='text-red-500' name="name" />
                            <p className='mt-[16px] text-gray-600'>ລາຄາ</p>
                            <Field disabled={isSubmitting} type='number' name="price" className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ໃສ່ລາຄາ...' />
                            <ErrorMessage component={"div"} className='text-red-500' name="price" />
                            <p className='mt-[16px] text-gray-600'>ໝວດໝູ່</p>
                            <Field disabled={isSubmitting} as="select" name="category" className='w-full bg-green-500 text-white rounded-[12px] px-[16px] py-[8px] text-center'>
                                {categories.map((item, index) => (
                                    <option key={index} value={item.categoryID}>{item.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage component={"div"} className='text-red-500' name="category" />
                            <div className='w-full  mt-[70px] flex justify-between gap-4'>
                                <div className='w-full'>
                                    <button disabled={isSubmitting} className='text-green-500 border border-green-500 py-[10px] w-full rounded-[12px] disabled:opacity-80'>ຍົກເລີກ</button>
                                </div>
                                <div className='w-full'>
                                    <button disabled={isSubmitting} type="submit" className='text-white bg-green-500 py-[10px] w-full rounded-[12px] flex justify-center gap-4 items-center disabled:opacity-80'>
                                        {isSubmitting && <Loading />}
                                        ບັນທຶກ
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </Sidebar>
  )
}

export default AddProduct