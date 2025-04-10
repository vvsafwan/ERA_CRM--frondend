import React from 'react'

export default function NotFound() {
  return (
    <div className="common-font w-screen min-h-screen max-h-auto bg-[#f2f2f2] flex flex-col justify-center items-center">
        <p className='text-[#FFC62E] text-[200px] font-extrabold'>404</p>
        <p className='font-bold text-2xl text-gray-600'>ERROR 404 - PAGE NOT FOUND</p>
        <p className='font-bold'>The page you requested could not be found</p>
    </div>
  )
}
