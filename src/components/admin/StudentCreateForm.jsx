import React, { useState } from 'react'
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
import { createStudent } from '../../service/adminApi';

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

  const handleOnchange = (e) => {
    const { name, value } = e.target;
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
          <InputDefault
            icon={<RiMiniProgramFill />}
            label={"Preffered Program"}
            type={"text"}
            placeholder={"Enter the Preffered Program"}
            name={"prefferedProgram"}
            onchange={handleOnchange}
          />
          <p className="text-red-500 text-sm font-semibold">{formDataError.prefferedProgram}</p>
          <InputDefault
            icon={<MdEmail />}
            label={"Email"}
            type={"text"}
            placeholder={"Enter the Email"}
            name={"email"}
            onchange={handleOnchange}
          />
          <p className="text-red-500 text-sm font-semibold">{formDataError.email}</p>
          <InputDefault
            icon={<FaUserTie />}
            label={"Tele-caller"}
            type={"text"}
            placeholder={"Enter your Tele-caller"}
            name={"teleCaller"}
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
