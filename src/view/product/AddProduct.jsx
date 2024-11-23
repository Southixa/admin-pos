import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaChevronLeft } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import UploadImage from '../../components/UploadImage';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationSchema } from '../../utils';

const AddProduct = () => {

    const navigate = useNavigate();

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
                    category: "",
                }}
                onSubmit={async (values) => {
                    console.log("values =>", values);
                }}
                >
                    {({ errors, touched, isSubmitting })=>(
                        <Form>
                            <h3 className='text-center text-[20px] mt-[4px]'>ຮູບພາບ</h3>
                            <div className='w-full flex justify-center items-center mt-[16px]'>
                                <UploadImage />
                            </div>
                            <p className='mt-[16px] text-gray-600'>ຊື່ເມນູ</p>
                            <Field type='text' name="name" className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ຊື່ເມນູ...' />
                            <ErrorMessage component={"div"} className='text-red-500' name="name" />
                            <p className='mt-[16px] text-gray-600'>ລາຄາ</p>
                            <Field type='number' name="price" className='bg-gray-100 w-full rounded-[12px] border border-garay-200 px-[16px] py-[8px] placeholder:text-[14px] placeholder:text-gray-300' placeholder='ໃສ່ລາຄາ...' />
                            <ErrorMessage component={"div"} className='text-red-500' name="price" />
                            <p className='mt-[16px] text-gray-600'>ໝວດໝູ່</p>
                            <Field as="select" name="category" className='w-full bg-green-500 text-white rounded-[12px] px-[16px] py-[8px] text-center'>
                                <option value="1">ທອດ</option>
                                <option value="2">ຕຳ</option>
                                <option value="3">ຍຳ</option>
                            </Field>
                            <ErrorMessage component={"div"} className='text-red-500' name="category" />
                            <div className='w-full  mt-[70px] flex justify-between gap-4'>
                                <div className='w-full'>
                                    <button className='text-green-500 border border-green-500 py-[10px] w-full rounded-[12px]'>ຍົກເລີກ</button>
                                </div>
                                <div className='w-full'>
                                    <button type="submit" className='text-white bg-green-500 py-[10px] w-full rounded-[12px]'>ບັນທຶກ</button>
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