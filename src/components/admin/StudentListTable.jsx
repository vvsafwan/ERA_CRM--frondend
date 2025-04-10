import React from 'react'

//icons
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function StudentListTable() {

    const users = [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: true,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: true,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: true,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: true,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: false,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: false,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: false,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: false,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: false,
        },
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            dob: "1990-01-01",
            adhaar: "1234-5678-9012",
            verified: true,
        },
    ];

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
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex justify-around items-center bg-white ps-10 py-4 rounded-xl shadow-sm border border-gray-200"
                    >
                        <div className="text-sm w-[5%] font-semibold">{user.id}</div>
                        <div className="text-md w-[14%] text-[#ffc62e] font-extrabold">{user.firstName}</div>
                        <div className="text-sm w-[14%] font-bold">{user.lastName}</div>
                        <div className="text-sm w-[20%] text-gray-500">{user.email}</div>
                        <div className="text-sm w-[12%] text-gray-500">{user.dob}</div>
                        <div className="text-sm w-[15%] text-gray-500 font-bold">{user.adhaar}</div>
                        <div className="text-sm w-[12%]">
                            <span className={`font-semibold rounded-3xl px-3 py-1 ${user.verified ? "bg-[#cceedc] text-[#3a9f59]" : "bg-[#fcdcdb] text-[#c63a31]"}`}>
                                {user.verified ? "active" : "inactive"}
                            </span>
                        </div>
                        <div className="flex w-[8%] gap-3">
                            <FaRegEdit size={18} />
                            <MdDeleteOutline size={20} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
