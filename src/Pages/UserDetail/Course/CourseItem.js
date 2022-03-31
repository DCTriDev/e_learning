import React, { useEffect, useLayoutEffect, useState } from "react";
import httpService from "../../../Services/http.service";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { setUserDetail } from "../../../Redux/Slice/userSlice";
import { removeCourse } from "../../../Redux/Slice/listCourseSlice";
export default function CourseItem({ data, index }) {
  // console.log(data);
  // const dispatch = useDispatch();
  const warning = () => {
    message.warning(" bạn đã hủy khóa học");
  };

  const error = () => {
    message.error("This is an error message");
  };
  const dispatch = useDispatch();

  const cancleCourse = (data) => {
    console.log(index);
    httpService
      .cancleCourse(data)
      .then((res) => {
        console.log(res);
        dispatch(removeCourse(data.maKhoaHoc));
        warning(" bạn đã hủy khóa học");
      })

      .catch((err) => {
        console.log(err);
        // error();
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
              {data.maKhoaHoc}
            </span>
            {data?.tenKhoaHoc}
          </p>
          <p className=" text-black text-lg">
            {data.moTa?.length > 500
              ? `${data.moTa.substring(0, 450)}...`
              : `${data.moTa}`}
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
