import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCancleCourse } from "../../../Redux/Slice/listCourseSlice";
export default function CourseItem({ data, index }) {
  const warning = () => {
    message.warning(" bạn đã hủy khóa học");
  };
  let widtWindown = window.innerWidth;
  const dispatch = useDispatch();

  const cancleCourse = (maKhoaHoc) => {
    dispatch(fetchCancleCourse(maKhoaHoc));
    warning(" bạn đã hủy khóa học");
  };
  let { userDetail } = useSelector((state) => state.userSlice);

  return (
    <div className=" flex space-x-10 border-2 border-solid border-neutral-300 p-2 items-center ">
      <img className=" h-52 w-40 object-fill" src={data.hinhAnh} alt="" />
      <div className=" flex flex-grow justify-between">
        <div className="  ">
          <p className=" text-black text-xl uppercase font-bold flex md:flex-col md:items-start lg:flex-row">
            <span className="text-lg font-semibold bg-red-600 text-white rounded-md px-2 mr-3 normal-case">
              {data.danhMucKhoaHoc.maDanhMucKhoahoc}
            </span>
            {data?.tenKhoaHoc}
          </p>
          <p className=" text-black md:text-sm   xl:text-lg">
            {data.moTa.substring(0, 250)}...
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
