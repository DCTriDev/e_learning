import React, { useEffect, useLayoutEffect, useState } from "react";
import httpService from "../../../Services/http.service";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../../../Redux/Slice/userSlice";
export default function CourseItem({ data }) {
  const warning = () => {
    message.warning(" bạn đã hủy khóa học");
  };

  const error = () => {
    message.error("This is an error message");
  };
  const dispatch = useDispatch();
  let [detail, setDetail] = useState({});
  useEffect(() => {
    httpService
      .getCourseDetail(data.maKhoaHoc)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
    // console.log(userDetail.taiKhoan, data.maKhoaHoc);
  }, [data.maKhoaHoc]);
  const cancleCourse = (data) => {
    httpService
      .cancleCourse(data)
      .then((res) => {
        console.log(res);
        warning(" bạn đã hủy khóa học");
        httpService
          .getUserDetail({
            taikhoan: userDetail.taiKhoan,
            matKhau: userDetail.matKhau,
          })
          .then((res) => {
            dispatch(setUserDetail(res.data));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        error();
      });
  };
  let { userDetail } = useSelector((state) => state.userSlice);
  return (
    <div className=" flex space-x-10 border-2 border-solid border-neutral-300 p-2   ">
      <img className=" h-52 w-40" src="https://picsum.photos/200/300" alt="" />
      <div className=" flex flex-grow justify-between">
        <div className="  ">
          <p className=" text-black text-xl uppercase font-bold">
            <span className="text-lg font-semibold bg-red-600 text-white rounded-md px-2 mr-3 normal-case">
              {detail.danhMucKhoaHoc?.maDanhMucKhoahoc}
            </span>
            {detail?.tenKhoaHoc}
          </p>
          <p className=" text-black text-lg">
            {detail.moTa?.length > 500
              ? `${detail.moTa.substring(0, 450)}...`
              : `${detail.moTa}`}
          </p>
        </div>
        <div className=" ">
          <button
            onClick={() => {
              cancleCourse({
                taiKhoan: userDetail.taiKhoan,
                maKhoaHoc: data.maKhoaHoc,
              });
            }}
            className=" cursor-pointer bg-yellow-500 px-3 py-1 font-semibold text-white border-transparent shadow-lg"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
