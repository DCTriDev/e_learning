// import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../../Redux/Slice/listCourseSlice";
import httpService from "../../../Services/http.service";
import ModalUpdateDetail from "./ModalUpdateDetail";

export default function Profile() {
  const { userDetail } = useSelector((state) => state.userSlice);
  // useEffect(() =>{})
  const dispatch = useDispatch();
  let [detail, setDetail] = useState({});
  useEffect(() => {
    setDetail(userDetail);

    userDetail.chiTietKhoaHocGhiDanh?.map((item, index) => {
      httpService
        .getCourseDetail(item.maKhoaHoc)
        .then((res) => {
          dispatch(setList(res.data));
        })
        .catch((err) => console.log(err));
    });
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
