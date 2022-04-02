// import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalUpdateDetail from "./ModalUpdateDetail";

export default function Profile() {
  const { userDetail } = useSelector((state) => state.userSlice);

  let [detail, setDetail] = useState({});
  useEffect(() => {
    setDetail(userDetail);
  }, [userDetail]);

  return (
    <div className="">
      <div className=" grid lg:grid-cols-1 lg:space-x-0 xl:grid-cols-2 xl:gap-x-28 xl:gap-y-5   w-3/4 mx-auto">
        <p className="lg:text-lg flex justify-between text-xl">
          email:
          <span className=" font-semibold">{detail.email}</span>
        </p>
        <p className="lg:text-lg flex justify-between  text-xl">
          Tài khoản:
          <span className=" font-semibold">{detail.taiKhoan}</span>
        </p>
        <p className="lg:text-lg flex justify-between  text-xl">
          Mật khẩu:
          <span className=" font-semibold">{detail.matKhau}</span>
        </p>

        <p className="lg:text-lg flex justify-between  text-xl">
          Họ tên:
          <span className=" font-semibold">{detail.hoTen}</span>
        </p>
        <p className="lg:text-lg flex justify-between  text-xl">
          Số điện thoại:
          <span className=" font-semibold">{detail.soDT}</span>
        </p>
        <p className="lg:text-lg flex justify-between  text-xl">
          Mã người dùng:
          <span className=" font-semibold">{detail.maLoaiNguoiDung}</span>
        </p>
        <div className=" xl:col-span-2">
          <ModalUpdateDetail />
        </div>
      </div>
    </div>

    // </TabPane>
  );
}
