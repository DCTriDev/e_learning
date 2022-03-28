import React from "react";
import LogInForm from "./LogInForm/LogInForm";

export default function Login() {
    return (
        <div className="w-full  h-screen flex justify-center items-center bg-gray-400 ">
            <div className="w-2/3 p-5 rounded-lg shadow-lg bg-white">
                <LogInForm />
            </div>
        </div>
    );
}
