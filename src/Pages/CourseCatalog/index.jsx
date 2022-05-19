import React, { useEffect } from "react";
import Layouts from "../../Layouts";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseListByCatalog } from "../../Redux/Slice/courseSlice";
import CourseCard from "../../Components/ItemCourse/CourseCard";

function CourseCatalog({ maDanhMuc }) {
  const courseListByCatalog = useSelector(
    (state) => state.courseSlice.courseListByCatalog
  );
  const dispatch = useDispatch();

  let handleRenderCourseItem = () => {
    return courseListByCatalog?.map((item, index) => {
      return <CourseCard key={index} data={item} />;
    });
  };

  useEffect(() => {
    dispatch(fetchCourseListByCatalog(maDanhMuc));
  }, []);

  return (
    <div className=" mt-28 lg:container md:px-20">
      
      <h2 className="title-list-course text-4xl font-bold mb-8 text-center">
      {courseListByCatalog ? (
          courseListByCatalog[0].danhMucKhoaHoc.tenDanhMucKhoaHoc
        ) : (
          <></>
        )}
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {handleRenderCourseItem()}
      </div>
    </div>
  );
}

export default Layouts(CourseCatalog);
