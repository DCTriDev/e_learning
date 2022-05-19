import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonHome() {
  return (
    <NavLink
      to="/"
      className=" bg-white text-red-500 w-24 h-24 fixed z-[999999]  text-center rounded-full hover:bg-red-500 hover:text-white transition-all left-0 top-0 md:translate-y-[50vh] shadow-2xl"
    >
      <HomeOutlined className=" text-4xl  leading-[96px]" />
    </NavLink>
  );
}
