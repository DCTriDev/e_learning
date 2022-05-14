import React, { useEffect, useState } from "react";
import Layout from "../../Layouts";
import httpService from "../../Services/http.service";
import { useParams } from "react-router-dom";
import "./index.css";
function CourseDetail() {
  let [courseDetail, setCourseDetail] = useState({});
  let { courseID } = useParams();
  useEffect(() => {
    httpService.getCourseDetail(courseID).then((res) => {
      setCourseDetail(res.data);
    });
  }, []);

  const renderCourseDetail = () => {
    return courseDetail ? (
      <div
        className="detail__contain flex flex-col w-full h-fit  md:h-screen bg-cover bg-center bg-no-repeat  items-center justify-center   "
        style={{ backgroundImage: `url(${courseDetail.hinhAnh})` }}
      >
        <div className="h-full detail__content md:w-4/5 md:h-4/5 bg-slate-300 bg-opacity-20 rounded-xl text-2xl text-black relative ">
          <div
            style={{ backgroundImage: `url(${courseDetail.hinhAnh})` }}
            className=" h-[300px] rounded-lg w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/4 lg:shadow-2xl md:h-1/3 lg:h-4/5 lg:w-1/3 bg-cover  bg-no-repeat  bg-center  "
          ></div>
          <div className=" p-3 lg:p-0  lg:ml-[30%] lg:pr-10 lg:h-full flex flex-col justify-center items-start lg:space-y-8">
            <p className=" text-xl  font-semibold text-gray-500">
              {courseDetail.ngayTao}
            </p>
            <h2 className="course-title  m-0 text-3xl font-bold uppercase font-sans ">
              {courseDetail.tenKhoaHoc}
            </h2>
            <p className="course-desc text-justify text-gray-500 text-lg tracking-[1px] break-words font-semibold  ">
              {courseDetail.moTa}
            </p>
            <button className=" bg-transparent text-white font-semibold rounded-2xl px-3 py-1 shadow-2xl shadow-slate-900 border-transparent hover:scale-125 transition-all hover:text-red-500">
              Ghi Danh
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };
  return <div className="mt-20">{renderCourseDetail()}</div>;
}

export default Layout(CourseDetail);
