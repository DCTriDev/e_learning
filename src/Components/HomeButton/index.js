import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeBtn() {
  return (
    <NavLink to="/" className=" fixed z-50 top-0 left-0">
      <HomeOutlined className=" text-4xl text-white bg-yellow-500 m-12 shadow-lg rounded-md hover:text-yellow-500 hover:bg-white transition-all hover:scale-150 hover:shadow-xl" />
    </NavLink>
  );
}
