import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaChevronLeft } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import UploadImage from '../../components/UploadImage';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationSchema } from '../../utils';
import { AddCategoryApi } from '../../api/category';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading';

const AddCategory = () => {

    const navigate = useNavigate();

    const handleAdd = async (value) => {
        const res = await AddCategoryApi(value.name, value.icon);
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
        navigate("/product/category")
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
                validationSchema={validationSchema.category}
                enableReinitialize={true}
                initialValues={{
                    name: "",
                    icon: null,
                }}
                onSubmit={async (values) => {
                    await handleAdd(values);
                }}
                >
                    {({ errors, touched, isSubmitting, setFieldValue })=>(
                        <Form>
                            <h3 className='text-center text-[20px] mt-[4px]'>ຮູບພາບ</h3>
                            <div className='w-full flex justify-center items-center mt-[16px]'>
                                <UploadImage onChange={(file) => {
                                    setFieldValue("icon", file);
                                }} />
                            </div>
                            <ErrorMessage component={"div"} className='text-red-500' name="icon" />
                            <p className='mt-[16px] text-gray-600'>ຊື່ໝວດໝູ່</p>
                            <Field type='text' name="name" className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ຊື່ເມນູ...' />
                            <ErrorMessage component={"div"} className='text-red-500' name="name" />

                            <div className='w-full  mt-[70px] flex justify-between gap-4'>
                                <div className='w-full'>
                                    <button className='text-green-500 border border-green-500 py-[10px] w-full rounded-[12px]'>ຍົກເລີກ</button>
                                </div>
                                <div className='w-full'>
                                    <button type="submit" className='text-white bg-green-500 py-[10px] w-full rounded-[12px] flex justify-center gap-4 items-center'>
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

export default AddCategory