import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { Input, Space } from "antd";
import { Pagination } from "antd";
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
    setState({
      totalPage: dskh.length / 2,
      minIndex: 0,
      maxIndex: 2,
    });
  }, [listCourseDetail]);

  let renderContent = () => {
    if (dskh.length === 0) {
      return (
        <p className=" italic text-center text-xl  text-red-500">
          (Không tìm thấy khóa học nào)
        </p>
      );
    } else {
      return dskh.slice(state.minValue, state.maxValue).map((item, index) => {
        // console.log({ dskh });
        return (
          index >= state.minIndex &&
          index < state.maxIndex && (
            <CourseItem key={index} data={item} index={index} />
          )
        );
      });
    }
  };
  ///

  let [state, setState] = useState({
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  let handleChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * 2,
      maxIndex: page * 2,
    });
  };
  ///
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
      <div className="space-y-3 min-h-[65vh]  relative flex flex-col items-center">
        {renderContent()}
        <Pagination
          className=" absolute bottom-0 mx-auto"
          pageSize={2}
          // current={1}
          total={dskh.length}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
