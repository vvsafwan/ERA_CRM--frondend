import React from 'react'

export default function TertiaryButton({ text, onclick }) {
  return (
    <div>
        <button className='bg-gradient-to-b from-[#fe000078] to-[#ff2e2e] hover:bg-[#ff5757] hover:scale-110 text-white font-semibold py-3 px-14 rounded-3xl shadow-gray-500 shadow transition delay-50 duration-200 ease-in-out cursor-pointer' onClick={onclick}>{text}</button>
    </div>
  )
}
    