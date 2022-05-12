import React from "react";
import HomeBtn from "../../Components/HomeButton";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <div>
      <HomeBtn />
      <div className="lg:container px-14 lg:px-0 grid lg:grid-cols-2 md:grid-cols-1 py-20 gap-12">
        <div className="col-span-1">
          <img
            className="w-full"
            src="https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png"
            alt="login"
          />
        </div>
        <div className="col-span-1 self-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
