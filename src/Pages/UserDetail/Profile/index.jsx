// import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ModalUpdateDetail from "./ModalUpdateDetail";

export default function Profile() {
  const { userDetail } = useSelector((state) => state.userSlice);

  return (
   <div className="flex flex-col space-y-7 lg:flex-row">
      <div className=" flex flex-col items-center space-y-6 ">
        <img
          className=" rounded-full  lg:h-44 w-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Ku6shBAMjN4XlJnYYR4uCD-is3Gw4wRAg&usqp=CAU"
          alt=""
        />
        <span className=" font-semibold text-xl uppercase">
          {userDetail?.hoTen}
        </span>
        <div className="grid grid-cols-4">
          <img
            className=" lg:h-14 w-auto h-10"
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt=""
          />
          <img
            className=" lg:h-14 w-auto h-10"
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt=""
          />
          <img
            className=" lg:h-14 w-auto h-10"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt=""
          />
          <img
            className=" lg:h-14 w-auto h-10"
            src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
            alt=""
          />
        </div>
      </div>
      <div className=" grid grid-cols-1  lg:grid-cols-2  w-3/4 mx-auto gap-x-14">
        <p className=" lg:text-lg flex justify-between text-xl ">
          <span>Email:</span>
          <span className=" font-semibold">{userDetail?.email}</span>
        </p>
        <p className=" lg:text-lg flex justify-between text-xl ">
          <span>Tài khoản:</span>
          <span className=" font-semibold">{userDetail?.taiKhoan}</span>
        </p>
        <p className=" lg:text-lg flex justify-between text-xl ">
          <span>Mật khẩu:</span>
          <span className=" font-semibold">{userDetail?<span>*********</span>:<></>}</span>
        </p>
        <p className=" lg:text-lg flex justify-between text-xl ">
          <span>Họ tên:</span>
          <span className=" font-semibold">{userDetail?.hoTen}</span>
        </p>
        <p className=" lg:text-lg flex justify-between text-xl ">
          <span>Số điện thoại:</span>
          <span className=" font-semibold">{userDetail?.soDT}</span>
        </p>
        <p className=" lg:text-lg flex justify-between text-xl ">
          <span>Mã người dùng:</span>
          <span className=" font-semibold">{userDetail?.maLoaiNguoiDung}</span>
        </p>
        <div className=" lg:col-span-2">
          <ModalUpdateDetail />
        </div>
      </div>
    </div>
  );
}
