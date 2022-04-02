import { Input, Pagination, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetail } from "../../../Redux/Slice/listCourseSlice";
import CourseItem from "./CourseItem";
export default function CourseList() {
  let [state, setState] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const pageSize = 2;
  const { userDetail } = useSelector((state) => state.userSlice);
  const { Search } = Input;
  let listSearch = [];
  const onSearch = (value) => {
    searchCourse(value);
    setdskh(listSearch);
  };
  const dispatch = useDispatch();
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
  useEffect(() => {
    setState({
      data: dskh,
      totalPage: dskh.length / pageSize,
      minIndex: 0,
      current: 1,
      maxIndex: pageSize,
    });
  }, [dskh]);
  useEffect(() => {
    userDetail.chiTietKhoaHocGhiDanh?.map((item, index) => {
      dispatch(fetchCourseDetail(item.maKhoaHoc));
    });
  }, []);
  let renderContent = () => {
    if (dskh.length === 0) {
      return (
        <p className=" italic text-center text-xl  text-red-500">
          (Không tìm thấy khóa học nào)
        </p>
      );
    } else {
      return dskh.map((item, index) => {
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

  let handleChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  ///
  return (
    <div className=" flex flex-col md:space-y-3 xl:space-y-6 xl:h-fit  lg:h-screen lg:space-y-3   relative">
      <h1 className=" lg:text-xl text-center uppercase">
        các khóa học đã tham gia
      </h1>
      <div className=" self-end">
        <Space direction="vertical">
          <Search
            placeholder="tìm kiếm khóa học"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <div className="space-y-3 flex flex-col items-center justify-start ">
        <div className="  md:h-[500px]">{renderContent()}</div>
        <Pagination
          className="   mx-auto "
          pageSize={pageSize}
          defaultCurrent={state.current}
          total={dskh.length}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
