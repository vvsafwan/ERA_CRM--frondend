import React from 'react'
import logo from '../../assets/sirralogo_crop.jpg'
import SideBarMenu from './SideBarMenu';
import { useLocation } from 'react-router-dom';

//icons
import { MdSpaceDashboard } from "react-icons/md";  
import { PiStudent } from "react-icons/pi";

export default function SideBar() {
    const location = useLocation();

    const iconColor = '#3d3b3b';
  return (
    <div className='common-font bg-white w-[25vw] ms-5 my-5 rounded-3xl shadow-lg shadow-gray-400'>
          <img src={logo} className='my-10 mx-7' alt="logo" width={180} />
          <div className='mx-5'>
            <SideBarMenu logo={<MdSpaceDashboard size={20} color={location.pathname === '/user/dashboard' ? 'white' : iconColor} />} menu={"Dashboard"} path={'/user/dashboard'} />
            <SideBarMenu logo={<PiStudent size={20} color={location.pathname === '/user/student-list' ? 'white' : iconColor} />} menu={"Student List"} path={'/user/student-list'} />
          </div>
        </div>
  )
}
