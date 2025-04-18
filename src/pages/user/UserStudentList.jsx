import React, { useEffect, useState } from 'react';
import StudentListTable from '../../components/user/StudentListTable';

export default function UserStudentList() {

    return (
        <div className='m-5 py-2 px-5'>
            <StudentListTable />
        </div>
    )
}
