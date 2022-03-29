import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { Input, Space } from "antd";
export default function CourseList() {
  const { Search } = Input;
  // let valueSearch = "";
  const onSearch = (value) => {
    // valueSearch = value;
    // searchCourse(value);
  };
  const { userDetail } = useSelector((state) => state.userSlice);

  let renderContent = () => {
    if (userDetail.chiTietKhoaHocGhiDanh.length === 0) {
      return (
        <p className=" italic text-center text-xl  text-red-500">
          (Bạn chưa có khóa học nào)
        </p>
      );
    } else {
      return userDetail.chiTietKhoaHocGhiDanh?.map((item, index) => {
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
