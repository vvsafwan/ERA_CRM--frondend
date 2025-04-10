import React from 'react'
import logo from '../../assets/sirralogo_crop.jpg'
import SideBarMenu from './SideBarMenu';

//icons
import { MdSpaceDashboard } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { useLocation } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";

export default function SideBar() { 

  const location = useLocation();

  const iconColor = '#3d3b3b';

  return (
    <div className='common-font bg-white w-[25vw] ms-5 my-5 rounded-3xl shadow-lg shadow-gray-400 max-h-[95vh]'>
      <img src={logo} className='my-10 mx-7' alt="logo" width={180} />
      <div className='mx-5'>
        <SideBarMenu logo={<MdSpaceDashboard size={20} color={location.pathname === '/admin/dashboard' ? 'white' : iconColor} />} menu={"Dashboard"} path={'/admin/dashboard'} />
        <SideBarMenu logo={<ImUserTie size={20} color={location.pathname === '/admin/user-list' ? 'white' : iconColor} />} menu={"User List"} path={'/admin/user-list'} />
        <SideBarMenu logo={<PiStudent  size={20} color={location.pathname === '/admin/student-list' ? 'white' : iconColor} />} menu={"Student List"} path={'/admin/student-list'} />
      </div>
    </div>
  )
}
