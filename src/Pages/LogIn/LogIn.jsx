import React from "react";
import LogInForm from "./LogInForm/LogInForm";

export default function Login() {
    return (
        <div className=" flex justify-center items-center py-20">
            <img
                src="https://pixerio.com/wp-content/uploads/2020/11/E-learning-Company.png"
                width={500}
            />
            <div className="">
                <LogInForm />
            </div>
        </div>
    );
}
