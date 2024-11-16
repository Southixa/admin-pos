import React from 'react'
import { RiHandCoinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Menu = ({ icon, title, isActive, path }) => {

  if(isActive){
    return (
        <Link to={path}>
            <div className='w-full mt-2 bg-green-500 rounded-full flex gap-4 py-[8px] pl-[40px] items-center'>
                <div className='w-[32px] h-[32px] flex justify-center items-center text-white text-[24px]'>
                    {icon}
                </div>
                <p className='text-white'>{title}</p>
            </div>
        </Link>
    )
  }

  return (
    <Link to={path}>
        <div className='w-full mt-2 rounded-full flex gap-4 py-[8px] pl-[40px] items-center'>
            <div className='w-[32px] h-[32px] flex justify-center items-center text-green-500 text-[24px]'>
                {icon}
            </div>
            <p>{title}</p>
        </div>
    </Link>
  )
}

export default Menu