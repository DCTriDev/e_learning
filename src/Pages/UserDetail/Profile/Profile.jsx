// import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ModalUpdateDetail from "./ModalUpdateDetail";

export default function Profile() {
  // const { TabPane } = Tabs;
  const { userDetail } = useSelector((state) => state.userSlice);

  return (
    <div>
      <div className=" grid grid-cols-2 space-x-28  w-3/4 mx-auto ">
        <div>
          <p className=" flex justify-between text-xl">
            email:
            <span className=" font-semibold">{userDetail.email}</span>
          </p>
          <p className=" flex justify-between  text-xl">
            Tài khoản:
            <span className=" font-semibold">{userDetail.taiKhoan}</span>
          </p>
          <p className=" flex justify-between  text-xl">
            Mật khẩu:
            <span className=" font-semibold">{userDetail.matKhau}</span>
          </p>

          <ModalUpdateDetail />
        </div>
        <div>
          <p className=" flex justify-between  text-xl">
            Họ tên:
            <span className=" font-semibold">{userDetail.hoTen}</span>
          </p>
          <p className=" flex justify-between  text-xl">
            Số điện thoại:
            <span className=" font-semibold">{userDetail.soDT}</span>
          </p>
        </div>
      </div>
    </div>
    // </TabPane>
  );
}
