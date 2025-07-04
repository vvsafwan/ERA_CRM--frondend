import React from 'react'

export default function PrimaryButton({ text, onclick }) {
  return (
    <div>
        <button className='bg-gradient-to-b from-[#FEF200] to-[#FFC62E] hover:bg-[#FFD157] hover:scale-110 text-white font-semibold py-3 px-14 rounded-3xl shadow-gray-500 shadow transition delay-50 duration-200 ease-in-out cursor-pointer' onClick={onclick}>{text}</button>
    </div>
  )
}
