import React, { useEffect, useState } from "react";
import Layout from "../../Layouts";
import httpService from "../../Services/http.service";
import { useParams } from "react-router-dom";
import "./index.css";
function CourseDetail() {
  let [courseDetail, setCourseDetail] = useState({});
  console.log(courseDetail);
  let { courseID } = useParams();
  console.log(courseID);
  useEffect(() => {
    httpService.getCourseDetail(courseID).then((res) => {
      setCourseDetail(res.data);
    });
  }, []);

  const renderCourseDetail = () => {
    return courseDetail ? (
      <div className="flex flex-col ">
        <img
          className="course-img w-full md:object-fill h-[50vh] object-cover"
          src={courseDetail.hinhAnh}
          alt=""
        />
        <span className=" self-end px-12 ">
          Ngày tạo : {courseDetail.ngayTao}{" "}
        </span>
        <div className="px-12">
          <div className=" mt-12 space-y-10">
            <h2 className="course-title text-center m-0 text-3xl font-bold uppercase font-sans ">
              {courseDetail.tenKhoaHoc}
            </h2>
            <h4 className="course-desc text-justify text-gray-500 text-lg tracking-[1px] ">
              {courseDetail.moTa}
            </h4>
          </div>
          <p className="italic text-right mr-5 text-gray-600 text-lg">
            Lượt xem: {courseDetail.luotXem}
          </p>
        </div>
      </div>
    ) : null;
  };
  return <div className="mt-20">{renderCourseDetail()}</div>;
}

export default Layout(CourseDetail);
