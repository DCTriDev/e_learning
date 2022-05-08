import React from "react";
import LogInForm from "./LogInForm/LogInForm";

export default function Login() {
  return (
    <div className=" flex flex-col lg:flex-row justify-between items-center py-20">
      <div className="w-full lg:w-1/2  flex justify-center lg:px-14 px-5">
        <img
          className="w-full "
          src="https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 lg:px-14 px-5 ">
        <LogInForm />
      </div>
    </div>
  );
}
