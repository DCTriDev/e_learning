import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <div className=" flex justify-center items-center py-20 lg:flex-row flex-col">
      <div className=" w-full lg:w-1/2 flex  justify-center lg:px-14">
        <img
          className="w-full"
          src="https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <SignUpForm />
      </div>
    </div>
  );
}
