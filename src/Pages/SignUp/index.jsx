import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
    return (
        <div className="container grid lg:grid-cols-2 md:grid-cols-1 py-20 gap-12">
            <div className="col-span-1">
                <img
                    src="https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png"
                    width={500}
                    alt='login'/>
            </div>
            <div className="col-span-1 self-center">
                <SignUpForm/>
            </div>
        </div>
    );
}
