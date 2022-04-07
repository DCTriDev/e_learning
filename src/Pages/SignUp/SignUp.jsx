import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
    return (
        <div className=" flex justify-center items-center py-20">
            <img
                src="https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png"
                width={500}
            />
            <div className="">
                <SignUpForm />
            </div>
        </div>
    );
}
