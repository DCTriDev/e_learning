import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { Input, Space } from "antd";

export default function CourseList() {
  const { Search } = Input;
  let listSearch = [];
  const onSearch = (value) => {
    searchCourse(value);
    setdskh(listSearch);
  };
  let searchCourse = (text) => {
    listSearch = [];
    listCourseDetail.map((khoaHoc) => {
      let result = khoaHoc.tenKhoaHoc.toLowerCase().search(text.toLowerCase());
      if (result !== -1) {
        listSearch.push(khoaHoc);
      }
    });
    return listSearch;
  };
  let { listCourseDetail } = useSelector((state) => state.listCourseSlice);
  let [dskh, setdskh] = useState(listCourseDetail);
  useEffect(() => {
    setdskh(listCourseDetail);
  }, [listCourseDetail]);

  let renderContent = () => {
    if (dskh.length === 0) {
      return (
        <p className=" italic text-center text-xl  text-red-500">
          (Không tìm thấy khóa học nào)
        </p>
      );
    } else {
      return dskh?.map((item, index) => {
        // console.log({ dskh });
        return <CourseItem key={index} data={item} index={index} />;
      });
    }
  };

  return (
    <div className=" flex flex-col space-y-6  ">
      <h1 className=" text-center uppercase">các khóa học đã tham gia</h1>
      <div className=" self-end">
        <Space direction="vertical">
          <Search
            placeholder="tìm kiếm khóa học"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <div className="space-y-3 ">{renderContent()}</div>
    </div>
  );
}
