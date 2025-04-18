import React, { useEffect, useState } from 'react'
import profileimg from '../../assets/profile-img.jpg';
import { useParams } from 'react-router-dom';
import { getStudent } from '../../service/userApi';

export default function UserStudentProfile() {

  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudent()
  }, []);

  const fetchStudent = async () => {
    setLoading(true);
    try {
      const response = await getStudent(id);
      setStudent(response.data.student);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[70vh]'>
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
    <div className='m-5 py-2 px-5'>
      <div>
        <div className='flex justify-between items-center'>
          <p className='font-extrabold text-3xl title-font'>Student Details</p>
        </div>
        <div className="bg-white rounded-3xl mt-5">
          <div className='px-10 py-7'>
            <div className='px-10 py-5 flex items-center bg-gradient-to-b from-[#FEF200] to-[#FFC62E] rounded-3xl'>
              <div className='w-[150px] h-[150px] rounded-[50%] overflow-x-hidden'>
                <img className='w-full h-full object-cover' src={profileimg} alt="Student-profile" />
              </div>
              <div className='ps-10'>
                <p className='font-bold text-3xl text-white'>{student?.fullName}</p>
                <p className='text-gray-500 text-lg font-medium'>{student?.email}</p>
              </div>
            </div>
          </div>
          <div className='mx-20 w-[60%]'>
            <p className='font-bold text-lg'>Personal Information</p>
            <div className='flex py-5 justify-between'>
              <div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Whatsapp Number</small>
                  <p className='text-md pt-1'>{student?.whatsappNumber}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Contact Number</small>
                  <p className='text-md pt-1'>{student?.contactNumber}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Location</small>
                  <p className='text-md pt-1'>{student?.location}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>District</small>
                  <p className='text-md pt-1'>{student?.district}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Highest Level of Education</small>
                  <p className='text-md pt-1'>{student?.highestLevelEducation}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Study Area</small>
                  <p className='text-md pt-1'>{student?.studyArea}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Mark Percentage</small>
                  <p className='text-md pt-1'>{student?.markPercentage}</p>
                </div>
              </div>
              <div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Completion Year</small>
                  <p className='text-md pt-1'>{student?.completionYear}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>IELTS Score</small>
                  <p className='text-md pt-1'>{student?.ieltsScore}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Preffered Country</small>
                  <p className='text-md pt-1'>{student?.prefferedCountry}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Preffered Program</small>
                  <p className='text-md pt-1'>{student?.prefferedProgram}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Email</small>
                  <p className='text-md pt-1'>{student?.email}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Tele-Caller</small>
                  <p className='text-md pt-1'>{student?.teleCaller}</p>
                </div>
                <div className='my-2'>
                  <small className='font-medium text-gray-600'>Message</small>
                  <p className='text-md pt-1'>{student?.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
