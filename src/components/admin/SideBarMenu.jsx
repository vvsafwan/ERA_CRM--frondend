import React from 'react'
import { useLocation, Link } from 'react-router-dom';

export default function SideBarMenu({ logo, menu, path }) {
    const location = useLocation();
    const isActive = location.pathname === path;
    return (
        <div className={`${isActive ? 'bg-gradient-to-b from-[#FEF200] to-[#FFC62E] rounded-3xl' : ''}`}>
            <Link to={path}>
                <div className='flex mx-10 py-4'>
                    {logo}
                    <p className={`ms-4 font-semibold text-[#3d3b3b] text-sm sidebar-font ${isActive ? 'text-white' : ''}`}>{menu}</p>
                </div>
            </Link>
        </div>
    )
}
