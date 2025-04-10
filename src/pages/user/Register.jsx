import React, { useState } from "react";

//components
import InputDefault from "../../components/InputDefault";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

//hooks
import { useNavigate } from "react-router-dom";

//icons
  import { FaUser } from "react-icons/fa";
  import { FaKey } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
  import { MdDateRange } from "react-icons/md";
  import { FaIdCard } from "react-icons/fa6";

export default function Register() {
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

  const navigate = useNavigate();

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
      if(!aadhaarRegex.test(value)) {
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
      errorMessage = `Enter valid ${name}`;
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
        setFormDataError((prev) => ({ ...prev, [key]: `${key} is required` }));
      } 
    });
    const isFormErrorEmpty = Object.values(formDataError).every(value => value === '');
    if(isFormErrorEmpty) {
      // const data = await userRegister()
      // console.log(data)
    }
  }

  return (
    <div className="common-font w-screen min-h-screen max-h-auto bg-[#f2f2f2] flex flex-col justify-center items-center">
      <div className="md:w-[80vw] bg-white md:flex rounded-3xl shadow-gray-300 shadow">
        <div className="md:w-[50vw] bg-gradient-to-b from-[#FEF200] to-[#FFC62E] flex flex-col justify-center items-center rounded-3xl px-10 py-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold">
            Hi Friend!
          </h1>
          <p className="pb-5 text-white text-center">
            If you already have an account, Please Sign In
          </p>
          <SecondaryButton
            text={"Sign In"}
            onClick={() => navigate("/login")}
            textColor={"white"}
            borderColor={"White"}
          />
        </div>
        <div className="md:w-[50vw] py-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Tele-Callers Register
            </h1>
            <p className="pb-5 text-[#FFC62E]">
              <small>
                <b>This is the portal for tele-callers to Register</b>
              </small>
            </p>
            <div className="w-[70%]">
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
            <PrimaryButton text={"Register"} onclick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
