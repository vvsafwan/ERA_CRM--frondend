import React from 'react'
import { Outlet } from 'react-router-dom'

//components
import SideBar from '../components/user/SideBar';
import NavBar from '../components/user/Navbar';

export default function AdminLayout({ children }) {
  return (
    <div className='common-font min-h-screen max-h-auto bg-[#f2f2f2] flex'>
      <SideBar />
      <div className='w-full'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}
