import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import {
  AppstoreAddOutlined,
  ArrowRightOutlined,
  EyeOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import "./index.css";

function CourseCard({ data }) {
  let substringByLength = (string, length) => {
    if (string.length > length) {
      return string.substring(0, length) + "...";
    }
    return string;
  };
  return (
    <div className=" course__card min-h-[500px] border-gray-200 border-solid border-[1px] overflow-hidden flex flex-col justify-between rounded-xl shadow-lg hover:scale-125 hover:shadow-xl transition-all bg-white relative hover:z-20">
      <div className=" h-[85%] relative">
        <div
          className="courser__card-img h-[50%] bg-cover bg-center "
          style={{ backgroundImage: `url(${data.hinhAnh})` }}
        ></div>
        <div className=" absolute top-0 w-full h-[10%] flex items-center px-5 ">
          <span className="  text-white font-semibold bg-yellow-400 inline-block px-2  rounded-sm  ">
            {data.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </span>
        </div>
        <div className=" w-20 h-20 rounded-full bg-red-400 absolute bottom-[45%] right-0  mr-5 text-white text-center leading-[80px] font-semibold text-xl ">
          ${Math.floor(Math.random() * 100)}
        </div>

        <div className="course__card-content p-[20px]">
          <p className=" flex justify-between font-bold">
            <span>
              <AppstoreAddOutlined className=" text-[#ff6e65]" />{" "}
              {data.danhMucKhoaHoc.maDanhMucKhoahoc}
            </span>
            <span>
              <EyeOutlined className=" text-[#ff6e65]" /> {data.luotXem}
            </span>
          </p>
          <h2 className=" font-bold text-[22px]">
            {substringByLength(data.tenKhoaHoc, 20)}
          </h2>
          <p className=" text-base text-gray-500 break-words ">
            {substringByLength(data.moTa, 75)}
          </p>
        </div>
      </div>
      <div className="  h-[15%] px-[20px] flex items-center absolute bottom-0 w-full z-10">
        <div className=" border-t-gray-200 border-solid border-t-2 border-x-0 border-b-0   flex justify-between items-center w-full h-full">
          <div className=" text-yellow-500 ">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
          </div>

          <NavLink className="h-full" to={`/course-detail/${data.maKhoaHoc}`}>
            <button className="h-full font-semibold text-[#ff6e65] border-none bg-transparent cursor-pointer hover:text-indigo-800 hover:text-xl transition-all duration-100">
              Xem Chi Tiết <ArrowRightOutlined />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
