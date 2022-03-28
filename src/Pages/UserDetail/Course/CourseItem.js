import React, { useLayoutEffect, useState } from "react";
import httpService from "../../../Services/http.service";

export default function CourseItem({ data }) {
  let [detail, setDetail] = useState({});
  useLayoutEffect(() => {
    httpService
      .getCourseDetail(data.maKhoaHoc)
      .then((res) => {
        setDetail(res.data);
        console.log(detail);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" flex space-x-10">
      <img className=" h-52 w-40" src="https://picsum.photos/200/300" alt="" />
      <div className="">
        <p className=" text-black text-xl uppercase">
          <span className="text-lg font-semibold bg-red-600 text-white rounded-md px-2 mr-3 normal-case">
            {detail.danhMucKhoaHoc?.maDanhMucKhoahoc}
          </span>
          {detail.tenKhoaHoc}
        </p>
        <p className=" text-black text-lg">{detail.moTa}</p>
      </div>
    </div>
  );
}
