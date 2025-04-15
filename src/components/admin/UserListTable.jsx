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
    const [loading, setLoading] = useState(true);

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
        setLoading(true)
        try {
            const response = await getUsers(page);
            const { users, totalPages } = response.data;
            setUsers(users);
            setTotalPages(totalPages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-[60vh]'>
                <div role="status">
                    <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

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
