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
    <div>
      <div className=" grid grid-cols-2 space-x-28  w-3/4 mx-auto ">
        <div>
          <p className=" flex justify-between text-xl">
            email:
            <span className=" font-semibold">{detail.email}</span>
          </p>
          <p className=" flex justify-between  text-xl">
            Tài khoản:
            <span className=" font-semibold">{detail.taiKhoan}</span>
          </p>
          <p className=" flex justify-between  text-xl">
            Mật khẩu:
            <span className=" font-semibold">{detail.matKhau}</span>
          </p>

          <ModalUpdateDetail />
        </div>
        <div>
          <p className=" flex justify-between  text-xl">
            Họ tên:
            <span className=" font-semibold">{detail.hoTen}</span>
          </p>
          <p className=" flex justify-between  text-xl">
            Số điện thoại:
            <span className=" font-semibold">{detail.soDT}</span>
          </p>
        </div>
      </div>
    </div>
    // </TabPane>
  );
}
