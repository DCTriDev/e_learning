import React from "react";
import { NavLink } from "react-router-dom";
import ButtonHome from "../../Components/ButtonHome/ButtonHome";
import LogInForm from "./LogInForm/LogInForm";

export default function Login() {
  return (
    <div className=" w-screen h-screen flex items-center bg-gray-300 overflow-hidden">
      <ButtonHome />
      <div className=" lg:container w-[90%] mx-auto  lg:h-3/4 md:h-4/5 h-full lg:p-3 bg-white  shadow-xl rounded-2xl flex lg:flex-row flex-col  justify-center items-center ">
        <div
          className=" lg:w-1/2 w-full lg:h-full h-[50vh]  bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png)",
          }}
        ></div>
        <div className=" lg:w-1/2 w-full lg:p-0 p-3">
          <LogInForm />
          <NavLink to="/signup">
            <span className=" italic text-red-400 text-base hover:text-red-600 hover:text-lg leading-10 hover:leading-10">
              Bạn chưa có tài khoản ?
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
