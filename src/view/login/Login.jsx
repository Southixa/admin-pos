import React, { useEffect, useState } from 'react'
import Logo from '../../../public/images/logo.png'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationSchema } from '../../utils';

const Login = () => {
  
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[400px] min-h-[600px]'>

                <div className='w-full flex justify-center'>
                    <div className='w-[80px] min-h-[100px]'>
                        <div className='w-[80px] h-[80px]'>
                            <img src={Logo} alt="logo" className='w-full h-full object-cover' />
                            <h1 className='text-center text-[14px] font-semibold'>ຂາໄກ່ເຈ້ຕຸ້ຍ</h1>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-white border border-gray-200 rounded-md mt-[20px] p-[14px]'>
                    <Formik
                    validationSchema={validationSchema.login}
                    enableReinitialize={true}
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={async (values) => {
                        console.log("values =>", values);
                    }}
                    >
                        {({ errors, touched, isSubmitting })=>(
                            <Form>
                                <h2 className='text-center text-[24px] font-bold mt-[8px]'>ລ໋ອກອິນ</h2>
                                <p className='mt-[32px]'>ຊື່ຜູ້ໃຊ້</p>
                                <Field type='text' name="username" className='w-full border border-gray-200 rounded-[6px] py-[8px] px-[8px] focus:outline-none'/>
                                <ErrorMessage component={"div"} className='text-red-500' name="username" />
                                <p className='mt-[20px]'>ລະຫັດຜ່ານ</p>
                                <Field name="password" className='w-full border border-gray-200 rounded-[6px] py-[8px] px-[8px] focus:outline-none' type='password' />
                                <ErrorMessage component={"div"} className='text-red-500' name="password" />
                                <div className='w-full flex items-center mt-[8px] gap-2'>
                                    <input className='w-[16px] h-[16px]' type="checkbox" id="remember" name="remember" />
                                    <label for="remember">ຈື່ຂ້ອຍ</label>
                                </div>
                                <button type="submit" className='w-full bg-green-500 py-[8px] rounded-md text-white mt-[20px]'>ລ໋ອກອິນ</button>
                            </Form>
                        )}
                    </Formik>
                </div>


            </div>
        </div>
    )
}

export default Login