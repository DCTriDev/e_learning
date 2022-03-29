import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { Input, Space } from "antd";

export default function CourseList() {
  const { Search } = Input;

  const onSearch = (value) => {
    // let data = searchCourse(value);
    // console.log(data);
    searchCourse(value);
    console.log({ listSearch });
    setdsh(listSearch);
  };
  const { userDetail } = useSelector((state) => state.userSlice);

  let listSearch = [];
  let searchCourse = (text) => {
    listSearch = [];
    return userDetail.chiTietKhoaHocGhiDanh.map((khoaHoc) => {
      let result = khoaHoc.tenKhoaHoc.toLowerCase().search(text.toLowerCase());
      if (result !== -1) {
        listSearch.push(khoaHoc);
      }
      // console.log(listSearch);
      return listSearch;
    });
  };
  let [dskkh, setdsh] = useState(userDetail.chiTietKhoaHocGhiDanh);
  let renderContent = () => {
    if (dskkh.length === 0) {
      return (
        <p className=" italic text-center text-xl  text-red-500">
          (Không tìm thấy khóa học nào)
        </p>
      );
    } else {
      return dskkh?.map((item, index) => {
        return <CourseItem key={index} data={item} />;
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
