import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

export default function CourseList() {
  const { userDetail } = useSelector((state) => state.userSlice);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(userDetail);
  }, []);
  console.log("chiTietKhoaHocGhiDanh", userDetail.chiTietKhoaHocGhiDanh);
  let renderContent = () => {
    return data.chiTietKhoaHocGhiDanh?.map((item, index) => {
      return <CourseItem key={index} data={item} />;
    });
  };
  // console.log(userDetail.chiTietKhoaHocGhiDanh);
  return <div>{renderContent()}</div>;
}
