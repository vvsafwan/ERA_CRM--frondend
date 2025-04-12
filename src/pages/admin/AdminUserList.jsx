import React, { useState } from 'react'
import SecondaryButton from '../../components/SecondaryButton';
import UserlistTable from '../../components/admin/UserListTable'
import UserCreateForm from '../../components/admin/UserCreateForm';

export default function AdminUserList() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className='m-5 py-2 px-5'>
      {showAddForm ? (
        <div>
          <div className='flex justify-between items-center'>
            <p className='font-extrabold text-3xl title-font'>Create User</p>
            <SecondaryButton text={'Cancel'} onclick={() => setShowAddForm(false)} textColor={"black"} borderColor={"black"} />
          </div>
          <div className="bg-white shadow-lg shadow-gray-400 rounded-lg overflow-x-auto mt-7">
            <UserCreateForm setShowAddForm={setShowAddForm} />
          </div>
        </div>
      ) : (
        <div>
          <div className='flex justify-between items-center'>
            <p className='font-extrabold text-3xl title-font'>Tele-Callers List</p>
            <SecondaryButton text={'Add New User'} onclick={() => setShowAddForm(true)} textColor={"black"} borderColor={"black"} />
          </div>
          <div className="rounded-lg overflow-x-auto mt-7">
            <UserlistTable />
          </div>
        </div>
      )}
    </div>
  )
}
