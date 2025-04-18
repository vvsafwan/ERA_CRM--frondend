import React, { useEffect, useState } from 'react'
import toast, { Toaster } from "react-hot-toast";

//components
import InputDefault from "../InputDefault";
import PrimaryButton from '../PrimaryButton';

//icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { createStudent, getUsers, getUsersWithoutPage } from '../../service/adminApi';
import SelectInputDefault from '../SelectInputDefault';

export default function StudentCreateForm({ setShowAddForm }) {

  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    contactNumber: '',
    location: '',
    district: '',
    highestLevelEducation: '',
    studyArea: '',
    markPercentage: '',
    completionYear: '',
    ieltsScore: '',
    prefferedCountry: '',
    prefferedProgram: '',
    email: '',
    teleCaller: '',
    message: ''
  })

  const [formDataError, setFormDataError] = useState({
    fullName: '',
    whatsappNumber: '',
    contactNumber: '',
    location: '',
    district: '',
    highestLevelEducation: '',
    studyArea: '',
    markPercentage: '',
    completionYear: '',
    ieltsScore: '',
    prefferedCountry: '',
    prefferedProgram: '',
    email: '',
    teleCaller: '',
    message: ''
  })

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, '------------------>')
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorMessage = "";
    if (name === "email") {
      if (!emailRegex.test(value)) {
        errorMessage = "Enter a valid Email address";
        setFormData((prev) => ({ ...prev, [name]: '' }));
      }
    }
    else if (name === "whatsappNumber" || name === "contactNumber") {
      const phoneRegex = /^[0-9]{10}$/; // simple 10-digit phone number check
      if (!phoneRegex.test(value)) {
        errorMessage = "Enter a valid 10-digit phone number";
        setFormData((prev) => ({ ...prev, [name]: '' }));
      }
    }
    else if (!value.trim()) {
      errorMessage = `Please fill the required field`;
      setFormData((prev) => ({ ...prev, [name]: '' }));
    }
    if (!errorMessage) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setFormDataError((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        setFormDataError((prev) => ({ ...prev, [key]: `Please fill the required field` }));
        isValid = false;
      }
    });
    const isFormErrorEmpty = Object.values(formDataError).every(value => value === '');
    if (isFormErrorEmpty && isValid) {
      console.log(formData)
      try {
        const response = await createStudent(formData);
        if (response.status === 201) {
          toast.success(response?.data?.message);
          setTimeout(() => {
            setShowAddForm(false);
          }, 1000);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    }
  }

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await getUsersWithoutPage();
      const users = response.data.users;
      setUsers(users)
      console.log(response.data.users)
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
    <>
      <form>
        <Toaster />
        <div className="px-15 pt-15 pb-5">
          <InputDefault
            icon={<FaUser />}
            label={"Full Name"}
            type={"text"}
            placeholder={"Enter the Full Name"}
            name={"fullName"}
            onchange={handleOnchange}
          />
          <p className="text-red-500 text-sm font-semibold">{formDataError.fullName}</p>
          <div className="flex">
            <div className="me-5 w-full">
              <InputDefault
                icon={<IoLogoWhatsapp />}
                label={"Whatsapp Number"}
                type={"text"}
                placeholder={"Enter the Whatsapp Number"}
                name={"whatsappNumber"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.whatsappNumber}</p>
            </div>
            <div className="w-full">
              <InputDefault
                icon={<IoCallSharp />}
                label={"Contact Number"}
                type={"text"}
                placeholder={"Enter the Contact Number"}
                name={"contactNumber"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.contactNumber}</p>
            </div>
          </div>
          <div className="flex">
            <div className="me-5 w-full">
              <InputDefault
                icon={<FaLocationArrow />}
                label={"Location"}
                type={"text"}
                placeholder={"Enter the Location"}
                name={"location"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.location}</p>
            </div>
            <div className="w-full">
              <InputDefault
                icon={<CiLocationOn />}
                label={"District"}
                type={"text"}
                placeholder={"Enter the District"}
                name={"district"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.district}</p>
            </div>
          </div>
          <div className="flex">
            <div className="me-5 w-full">
              <InputDefault
                icon={<IoSchoolSharp />}
                label={"Highest Level of Education"}
                type={"text"}
                placeholder={"Enter the highest level of your Education"}
                name={"highestLevelEducation"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.highestLevelEducation}</p>
            </div>
            <div className="w-full">
              <InputDefault
                icon={<FaSchool />}
                label={"Study Area"}
                type={"text"}
                placeholder={"Enter the Study Area"}
                name={"studyArea"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.studyArea}</p>
            </div>
          </div>
          <div className="flex">
            <div className="me-5 w-full">
              <InputDefault
                icon={<FaPercentage />}
                label={"Mark Percentage"}
                type={"text"}
                placeholder={"Enter your mark percentage"}
                name={"markPercentage"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.markPercentage}</p>
            </div>
            <div className="w-full">
              <InputDefault
                icon={<MdDateRange />}
                label={"Completion Year"}
                type={"text"}
                placeholder={"Enter the completion year"}
                name={"completionYear"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.completionYear}</p>
            </div>
          </div>
          <div className="flex">
            <div className="me-5 w-full">
              <InputDefault
                icon={<PiExamFill />}
                label={"IELTS Score"}
                type={"text"}
                placeholder={"Enter your IELTS Score"}
                name={"ieltsScore"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.ieltsScore}</p>
            </div>
            <div className="w-full">
              <InputDefault
                icon={<FaMapMarkedAlt />}
                label={"Prefered Country"}
                type={"text"}
                placeholder={"Enter your preffered country"}
                name={"prefferedCountry"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.prefferedCountry}</p>
            </div>
          </div>
          <div className="flex">
            <div className="me-5 w-full">
              <InputDefault
                icon={<RiMiniProgramFill />}
                label={"Preffered Program"}
                type={"text"}
                placeholder={"Enter the Preffered Program"}
                name={"prefferedProgram"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.prefferedProgram}</p>
            </div>
            <div className="w-full">
              <InputDefault
                icon={<MdEmail />}
                label={"Email"}
                type={"text"}
                placeholder={"Enter the Email"}
                name={"email"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.email}</p>
            </div>
          </div>
          <SelectInputDefault 
            icon={<FaUserTie />}
            label={"Tele-caller"}
            name={"teleCaller"}
            options={users}
            onchange={handleOnchange}
          />
          <p className="text-red-500 text-sm font-semibold">{formDataError.teleCaller}</p>
          <InputDefault
            icon={<FaMessage />}
            label={"Message"}
            type={"text"}
            placeholder={"Enter the message"}
            name={"message"}
            onchange={handleOnchange}
          />
          <p className="text-red-500 text-sm font-semibold">{formDataError.message}</p>
        </div>
        <div className='flex justify-center mb-10'>
          <PrimaryButton text={"Register"} onclick={handleSubmit} />
        </div>
      </form>
    </>
  )
}
