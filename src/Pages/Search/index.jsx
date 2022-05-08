import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseList } from "../../Redux/Slice/courseSlice";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/ItemCourse/CourseCard";
import Layouts from "../../Layouts";

function Search() {
  const { courseList } = useSelector((state) => state.courseSlice);
  const dispatch = useDispatch();
  const { input } = useParams();
  useEffect(() => {
    dispatch(fetchCourseList());
  }, []);

  const handleSearchCourse = () => {
    return courseList.filter((course) =>
      course.tenKhoaHoc.toLowerCase().includes(input.toLowerCase())
    );
  };

  const handleRenderCourseFound = () => {
    if (courseList) {
      let result = handleSearchCourse();
      if (result.length === 0) {
        return (
          <div className="text-center">
            Không tìm thấy khóa học. Vui lòng thử lại!
          </div>
        );
      } else {
        return (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
            {result.map((course, index) => (
              <CourseCard key={index} data={course} />
            ))}
          </div>
        );
      }
    } else {
      return <></>;
    }
  };

  return (
    <div className="lg:container mx-auto pt-20 px-12">
      <h2 className="text-4xl font-bold mb-8">Kết quả tìm kiếm</h2>
      {handleRenderCourseFound()}
    </div>
  );
}

export default Layouts(Search);
