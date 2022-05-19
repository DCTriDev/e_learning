import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseList } from "../../../Redux/Slice/courseSlice";
import CourseCard from "../../../Components/ItemCourse/CourseCard";
import "./index.css";
function CourseList() {
  const CARD_RENDER_AMOUNT = 8;

  let courseList = useSelector((state) => state.courseSlice.courseList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseList());
  }, []);

  let handleRenderCourseItem = () => {
    return courseList?.map((item, index) => {
      if (index < CARD_RENDER_AMOUNT) {
        return <CourseCard key={index} data={item} />;
      }
    });
  };

  return (
    <div className="md:container mx-auto mt-10 md:px-12">
      <h2 className="title-list-course text-4xl font-bold mb-8 text-center">
        Khóa Học <span className=" text-[#ff6e65]">Mới Nhất</span>
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        {handleRenderCourseItem()}
      </div>
    </div>
  );
}

export default CourseList;
