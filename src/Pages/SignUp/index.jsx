import React from "react";
import ButtonHome from "../../Components/ButtonHome/ButtonHome";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <div className="h-[1400px] md:h-[1800px] lg:w-screen lg:h-screen flex items-center bg-gray-300 overflow-hidden">
      <ButtonHome />
      <div className=" lg:container w-[90%] mx-auto  lg:h-3/4 md:h-4/5 h-full lg:p-3 bg-white  shadow-xl rounded-2xl flex lg:flex-row flex-col  justify-center items-center ">
        <div
          className=" lg:w-1/2 w-full h-[50ch]  lg:h-full   bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png)",
          }}
        ></div>
        <div className=" lg:w-1/2 h-1/2 lg:h-full  w-full lg:p-0 p-3">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
