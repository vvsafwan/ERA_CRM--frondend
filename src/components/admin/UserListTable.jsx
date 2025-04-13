import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';

//icons
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { getUsers } from '../../service/adminApi';

export default function UserListTable() {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers(currentPage)
    }, [currentPage])

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <button className='px-5'>Previous</button>;
        }
        if (type === 'next') {
            return <button className='px-10'>Next</button>;
        }
        return originalElement;
    };

    const onChange = page => {
        setCurrentPage(page);
    };

    const fetchUsers = async (page) => {
        try {

            const response = await getUsers(page);
            const { users, totalPages } = response.data;
            setUsers(users);
            setTotalPages(totalPages);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex bg-black text-white font-bold text-sm ps-10 py-6 border-b border-gray-300">
                <div className='w-[5%]'>No</div>
                <div className='w-[14%]'>First Name</div>
                <div className='w-[14%]'>Second Name</div>
                <div className='w-[20%]'>Email</div>
                <div className='w-[12%]'>DOB</div>
                <div className='w-[15%]'>Adhaar Number</div>
                <div className='w-[12%]'>Verified</div>
                <div className='w-[8%]'>Action</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col space-y-1 mt-2">
                {
                    users.length > 0 ? (
                        users?.map((user, index) => (
                            <div
                                key={index}
                                className="flex justify-around items-center bg-white ps-10 py-4 rounded-xl shadow-sm border border-gray-200"
                            >
                                <div className="text-sm w-[5%] font-semibold">{index + 1 + (9 * (currentPage - 1))}</div>
                                <div className="text-md w-[14%] text-[#ffc62e] font-extrabold">{user.firstName}</div>
                                <div className="text-sm w-[14%] font-bold">{user.lastName}</div>
                                <div className="text-sm w-[20%] text-gray-500">{user.email}</div>
                                <div className="text-sm w-[12%] text-gray-500">{new Date(user.dob).toLocaleDateString("en-GB").split('/').join('-')}</div>
                                <div className="text-sm w-[15%] text-gray-500 font-bold">{user.adaarNo}</div>
                                <div className="text-sm w-[12%]">
                                    <span className={`font-semibold rounded-3xl px-3 py-1 ${user.isVerified ? "bg-[#cceedc] text-[#3a9f59]" : "bg-[#fcdcdb] text-[#c63a31]"}`}>
                                        {user.isVerified ? "active" : "inactive"}
                                    </span>
                                </div>
                                <div className="flex w-[8%] gap-3">
                                    <FaRegEdit size={18} />
                                    <MdDeleteOutline size={20} color='red' />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='font-bold text-center py-10 text-2xl text-gray-600'>No Users found!</div>
                    )
                }
            </div>

            <div className="mt-2">
                <div
                    className="bg-white py-4 rounded-xl shadow-sm border border-gray-200 flex justify-center"
                >
                    <Pagination current={currentPage} onChange={onChange} total={Number(totalPages) * 10} showSizeChanger={false} itemRender={itemRender} />
                </div>
            </div>
        </div>
    )
}
