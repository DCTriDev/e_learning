import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

export default function CourseList() {
  const { userDetail } = useSelector((state) => state.userSlice);
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   setData(userDetail);
  // }, []);
  console.log("chiTietKhoaHocGhiDanh", userDetail);
  let renderContent = () => {
    return userDetail.chiTietKhoaHocGhiDanh?.map((item, index) => {
      return <CourseItem key={index} data={item} />;
    });
  };
  return <div>{renderContent()}</div>;
}
