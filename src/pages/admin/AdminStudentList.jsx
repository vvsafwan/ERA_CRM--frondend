import React, { useState } from 'react';
import SecondaryButton from '../../components/SecondaryButton';
import StudentCreateForm from '../../components/admin/StudentCreateForm';
import StudentListTable from '../../components/admin/StudentListTable';

export default function AdminStudentList() {
    const [showAddForm, setShowAddForm] = useState(false);
    return (
        <div className='m-5 py-2 px-5'>
            {showAddForm ? (
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='font-extrabold text-3xl title-font'>Create Student</p>
                        <SecondaryButton text={'Cancel'} onclick={() => setShowAddForm(false)} textColor={"black"} borderColor={"black"} />
                    </div>
                    <div className="bg-white shadow-lg shadow-gray-400 rounded-lg overflow-x-auto mt-7">
                        <StudentCreateForm />
                    </div>
                </div>
            ) : (
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='font-extrabold text-3xl title-font'>Students List</p>
                        <SecondaryButton text={'Add New Student'} onclick={() => setShowAddForm(true)} textColor={"black"} borderColor={"black"} />
                    </div>
                    <div className="rounded-lg overflow-x-auto mt-7">
                        <StudentListTable />
                    </div>
                </div>
            )}
        </div>
    )
}
