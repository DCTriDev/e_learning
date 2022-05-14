import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { NavLink } from "react-router-dom";
import localServices from "../../../Services/localServices";
import { useSelector } from "react-redux";

const handleLogout = () => {
  localServices.removeUserInfo();
};

const menu = (
    <Menu className='rounded-xl p-2 translate-x-1/4'>
        <Menu.Item key="0" className='hover:bg-blue-500 rounded-lg'>
            <NavLink to="/profile" className='hover:text-white duration-300 transition-all ease-in-out'>
                <span className='flex items-center space-x-2'>
                    <ion-icon className='self-center' name="person-outline"/>
                    <span>Trang cá nhân</span>
                </span>
            </NavLink>
        </Menu.Item>
        <Menu.Item key="1" className='hover:bg-blue-500 rounded-lg'>
            <NavLink to="/dashboard" className='hover:text-white duration-300 transition-all ease-in-out'>
                <span className='flex items-center space-x-2'>
                    <ion-icon name="settings-outline"/>
                    <span>Bảng điều khiển</span>
                </span>
            </NavLink>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" className="hover:bg-blue-500 rounded-lg">
            <NavLink
                exact
                to="/"
                onClick={handleLogout}
                className="hover:text-white duration-300 transition-all ease-in-out">
                <span className="flex items-center space-x-2">
                    <ion-icon name="log-out-outline" />
                    <span>Đăng xuất</span>
                </span>
            </NavLink>
        </Menu.Item>
    </Menu>
);

function UserNav() {
  let [userInfo, setUserInfor] = useState();
  let { statusLocal } = useSelector((state) => state.userSlice);
  useEffect(() => {
    setUserInfor(localServices.getUserInfo() || {});
  }, [statusLocal]);
  return localServices.getUserInfo()?.accessToken ? (
    <div className="flex items-center justify-center space-x-2 relative">
      <div>
        Xin chào, <span className="text-red-600">{userInfo?.hoTen}</span>
      </div>
      <Dropdown overlay={menu} trigger={["click"]} className="relative">
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
    <div>
      <NavLink
        to="/login"
        className="bg-green-500 px-3 py-2 hover:scale-105 hover:bg-green-700 text-white duration-300 transition-all rounded-xl"
      >
        Đăng Nhập
      </NavLink>
      <NavLink
        to="/signup"
        className="bg-red-500 mx-3 px-3 py-2 hover:scale-105 hover:bg-red-700 text-white duration-300 transition-all rounded-xl"
      >
        Đăng Ký
      </NavLink>
    </div>
  );
}

export default UserNav;