import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-red-900 p-5">
            <div className="w-2/3 p-3 rounded-lg shadow-lg bg-white">
                <SignUpForm />
            </div>
        </div>
    );
}
