import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

//components
import InputDefault from "../../components/InputDefault";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

//icons
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

// api
import { adminLogin } from "../../service/adminApi";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formDataError, setFormDataError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorMessage = "";
    if (name === "email") {
      if (!emailRegex.test(value)) {
        errorMessage = "Enter a valid Email address.";
        setFormData((prev) => ({ ...prev, [name]: "" }));
      }
    } else if (!value.trim()) {
      errorMessage = `Please fill the required field`;
      setFormData((prev) => ({ ...prev, [name]: "" }));
    }
    if (!errorMessage) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setFormDataError((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        setFormDataError((prev) => ({ ...prev, [key]: `Please fill the required field` }));
        isValid = false;
      }
    });
    const isFormErrorEmpty = Object.values(formDataError).every(
      (value) => value === ""
    );
    if (isFormErrorEmpty && isValid) {
      try {
        const response = await adminLogin(formData);
        console.log(response);
        if (response.status === 200) {
          toast.success("Successfully Signed In!");
          localStorage.setItem("adminToken", response?.data?.accessToken);
          navigate("/admin/user-list");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Email or password is incorrect");
        } else if (error.response && error.response.status === 404) {
          toast.error("Admin not found!");
        } else {
          toast.error("Something went wrong");
        }
      }
    }
  };

  return (
    <div className="common-font w-screen min-h-screen max-h-auto bg-[#f2f2f2] flex flex-col justify-center items-center">
      <Toaster />
      <div className="md:w-[70vw] bg-white md:flex rounded-3xl shadow-gray-300 shadow">
        <div className="md:w-[50vw] py-20">
          <form>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Admin Login
              </h1>
              <p className="pb-5 text-[#FFC62E]">
                <small>
                  <b>This is the portal for Admin to Login</b>
                </small>
              </p>
              <div className="w-[70%]">
                <InputDefault
                  icon={<FaUser />}
                  label={"Email"}
                  type={"text"}
                  placeholder={"Enter the email"}
                  name={"email"}
                  onchange={handleOnchange}
                />
                <p className="text-red-500 text-sm font-semibold">
                  {formDataError.email}
                </p>
                <InputDefault
                  icon={<FaKey />}
                  label={"Password"}
                  type={"password"}
                  placeholder={"Enter the password"}
                  name={"password"}
                  onchange={handleOnchange}
                />
                <p className="text-red-500 text-sm font-semibold">
                  {formDataError.password}
                </p>
              </div>
              <div className="mt-5">
                <PrimaryButton text={"Login"} onclick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-[50vw] bg-gradient-to-b from-[#FEF200] to-[#FFC62E] flex flex-col justify-center items-center rounded-3xl px-10 py-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold">
            Hello, Tele-Caller!
          </h1>
          <p className="pb-5 text-white text-center">
            If you don't have an account, Please Sign Up
          </p>
          <SecondaryButton
            text={"Sign Up"}
            onclick={() => navigate("/register")}
            textColor={'white'}
            borderColor={'white'}
          />
        </div>
      </div>
    </div>
  );
}
