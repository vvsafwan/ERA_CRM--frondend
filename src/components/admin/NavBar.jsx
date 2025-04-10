import React from 'react'

//icons
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa";

export default function NavBar() {
    return (
        <>
            <div className='py-2 px-10 m-5 flex justify-end items-center bg-black rounded-3xl shadow-lg shadow-gray-400'>
                <div className='me-10'>
                    <FaBell size={20} color='white' />
                </div>
                <div className='flex items-center'>
                    <div>
                        <p className='font-bold text-white'>John Cooper</p>
                        <p className='text-white text-sm'>johncooper@gmail.com</p>
                    </div>
                    <div className='ms-10'>
                        <IoIosArrowDown size={20} color='white' />
                    </div>
                </div>
            </div>
        </>
    )
}
