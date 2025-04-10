import React, {useState} from 'react'

//components
import InputDefault from "../InputDefault";
import PrimaryButton from '../PrimaryButton';

//icons
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";

export default function StudentCreateForm() {

    const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            adaarNo: '',
            password: ''
          })
        
          const [formDataError, setFormDataError] = useState({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            adaarNo: '',
            password: ''
          })
        
          const handleOnchange = (e) => {
            const { name, value } = e.target;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const aadhaarRegex = /^[2-9][0-9]{11}$/;
            let errorMessage = "";
            if (name === "email") {
              if (!emailRegex.test(value)) {
                errorMessage = "Enter a valid Email address.";
                setFormData((prev) => ({ ...prev, [name]: '' }));
              }
            }
            else if (name === "adaarNo") {
              if (!aadhaarRegex.test(value)) {
                errorMessage = "Enter a valid Aadhaar Number"
                setFormData((prev) => ({ ...prev, [name]: '' }));
              }
            }
            else if (name === "dob") {
              if (!value) {
                errorMessage = "Date of Birth is required.";
              } else {
                const selectedDate = new Date(value);
                const today = new Date();
                const minDate = new Date();
                minDate.setFullYear(today.getFullYear() - 10);
        
                if (selectedDate > today) {
                  errorMessage = "Date of Birth cannot be in the future.";
                  setFormData((prev) => ({ ...prev, [name]: '' }));
                } else if (selectedDate > minDate) {
                  errorMessage = "You must be at least 10 years old.";
                  setFormData((prev) => ({ ...prev, [name]: '' }));
                }
              }
            }
            else if (name === "password") {
              if (value.length < 6) {
                errorMessage = "Password must be at least 6 characters long.";
                setFormData((prev) => ({ ...prev, [name]: '' }));
              } else if (/\s/.test(value)) {
                errorMessage = "Password cannot contain spaces.";
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
            Object.keys(formData).forEach(key => {
              if (!formData[key].trim()) {
                setFormDataError((prev) => ({ ...prev, [key]: `Please fill the required field` }));
              }
            });
            const isFormErrorEmpty = Object.values(formDataError).every(value => value === '');
            if (isFormErrorEmpty) {
              // const data = await userRegister()
              console.log(formData)
            }
          }

  return (
    <>
        <div className="px-15 pt-15 pb-5">
              <div className="flex">
                <div className="me-5 w-full">
                  <InputDefault
                    icon={<FaUser />}
                    label={"First Name"}
                    type={"text"}
                    placeholder={"Enter the First Name"}
                    name={"firstName"}
                    onchange={handleOnchange}
                  />
                  <p className="text-red-500 text-sm font-semibold">{formDataError.firstName}</p>
                </div>
                <div className="w-full">
                  <InputDefault
                    icon={<FaUser />}
                    label={"Last Name"}
                    type={"text"}
                    placeholder={"Enter the Last Name"}
                    name={"lastName"}
                    onchange={handleOnchange}
                  />
                  <p className="text-red-500 text-sm font-semibold">{formDataError.lastName}</p>
                </div>
              </div>
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
                icon={<MdDateRange />}
                label={"Date of Birth"}
                type={"date"}
                name={"dob"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.dob}</p>
              <InputDefault
                icon={<FaIdCard />}
                label={"Adaar Number"}
                type={"text"}
                placeholder={"Enter the Adaar Number"}
                name={"adaarNo"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.adaarNo}</p>
              <InputDefault
                icon={<FaKey />}
                label={"password"}
                type={"password"}
                placeholder={"Enter the password"}
                name={"password"}
                onchange={handleOnchange}
              />
              <p className="text-red-500 text-sm font-semibold">{formDataError.password}</p>
            </div>
            <div className='flex justify-center mb-10'>
              <PrimaryButton text={"Register"} onclick={handleSubmit} />
            </div>
        </>
  )
}
