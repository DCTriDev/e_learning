import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { NavLink } from "react-router-dom";
import localServices from "../../../Services/localServices";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";
import { useSelector } from "react-redux";
const handleLogout = () => {
  localServices.removeUserInfo();
};

const menu = (type) => {
  return (
    <Menu className="rounded-xl p-2 translate-x-1/4">
      <Menu.Item key="0" className="hover:bg-blue-500 rounded-lg">
        <NavLink
          to="/profile"
          className="hover:text-white duration-300 transition-all ease-in-out"
        >
          <span className="flex items-center space-x-2">
            <ion-icon className="self-center" name="person-outline" />
            <span>Profile</span>
          </span>
        </NavLink>
      </Menu.Item>
      {type === "GV" ? (
        <Menu.Item key="1" className="hover:bg-blue-500 rounded-lg">
          <NavLink
            to="/dashboard"
            className="hover:text-white duration-300 transition-all ease-in-out"
          >
            <span className="flex items-center space-x-2">
              <ion-icon name="settings-outline" />
              <span>Settings</span>
            </span>
          </NavLink>
        </Menu.Item>
      ) : (
        <></>
      )}
      <Menu.Divider />
      <Menu.Item key="2" className="hover:bg-blue-500 rounded-lg">
        <NavLink
          exact
          to="/"
          onClick={handleLogout}
          className="hover:text-white duration-300 transition-all ease-in-out"
        >
          <span className="flex items-center space-x-2">
            <ion-icon name="log-out-outline" />
            <span>Logout</span>
          </span>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

function UserNav() {
  let [type, setType] = useState("");
  let { stausLocal } = useSelector((state) => state.userSlice);
  useEffect(() => {
    setType(localServices.getUserInfo()?.maLoaiNguoiDung);
  }, [stausLocal]);
  let userInfo = localServices.getUserInfo();
  return userInfo?.accessToken ? (
    <div className="flex items-center justify-center space-x-2 relative">
      <div>
        Xin chào, <span className="text-red-600">{userInfo?.hoTen}</span>
      </div>
      <Dropdown overlay={menu(type)} trigger={["click"]} className="relative">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <img
            className="w-12 h-12 object-cover rounded-full relative"
            src="https://picsum.photos/200/200"
            alt=""
          />
        </a>
      </Dropdown>
    </div>
  ) : (
    <div className="relative">
      <button
        className=" w-[70px] h-[70px] rounded-full border-red-500  text-red-500 cursor-pointer hover:bg-yellow-500  hover:text-white transition-all duration-500"
        onClick={() => {
          document.getElementById("user-staus").classList.toggle("hidden");
          document.getElementById("user-staus").classList.toggle("show");
        }}
      >
        <UserOutlined className=" text-2xl " />
      </button>
      <div
        id="user-staus"
        className="hidden   absolute bottom-0 left-0 translate-y-[100%] translate-x-[-20%] w-28    bg-gray-900 bg-opacity-75 items-center  rounded-lg  shadow-xl transition-all duration-1000 "
      >
        <NavLink
          to="/login"
          className="  font-semibold text-lg  uppercase text-center  text-white w-full py-2 hover:bg-white hover:text-gray-500"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/signup"
          className="  font-semibold text-lg  uppercase text-center text-white w-full py-2 hover:bg-white hover:text-gray-500"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default UserNav;
