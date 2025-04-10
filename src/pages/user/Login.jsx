import React from "react";

//components
import InputDefault from "../../components/InputDefault";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

//hooks
import { useNavigate } from "react-router-dom";

//icons
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="common-font w-screen min-h-screen max-h-auto bg-[#f2f2f2] flex flex-col justify-center items-center">
      <div className="md:w-[80vw] bg-white md:flex rounded-3xl shadow-gray-300 shadow">
        <div className="md:w-[50vw] py-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Tele-Callers Login
            </h1>
            <p className="pb-5 text-[#FFC62E]">
              <small>
                <b>This is the portal for tele-callers to Login</b>
              </small>
            </p>
            <div className="w-[70%]">
              <InputDefault
                icon={<FaUser />}
                label={"username"}
                type={"text"}
                placeholder={"Enter the username"}
              />
              <InputDefault
                icon={<FaKey />}
                label={"password"}
                type={"password"}
                placeholder={"Enter the password"}
              />
              <div className="w-full flex justify-end">
                <a href="#" className="text-sm underline font-semibold">
                  Forgot Password?
                </a>
              </div>
            </div>
            <PrimaryButton text={"Login"} />
          </div>
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
            onClick={() => navigate("/register")}
            textColor={"white"}
            borderColor={"white"}
          />
        </div>
      </div>
    </div>
  );
}
