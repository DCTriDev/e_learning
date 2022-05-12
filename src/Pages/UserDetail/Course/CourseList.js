import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseDetail,
  searchUser,
} from "../../../Redux/Slice/listCourseSlice";
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
  // const { Search } = Input;
  const onFinish = (values) => {
    dispatch(searchUser(values.valueSearch));
    setState({
      data: listCourseDetail,
      totalPage: listCourseDetail.length / pageSize,
      minIndex: 0,
      current: 1,
      maxIndex: pageSize,
    });
  };
  const dispatch = useDispatch();

  let { listCourseDetail } = useSelector((state) => state.listCourseSlice);

  useEffect(() => {
    for (let i = 0; i < userDetail.chiTietKhoaHocGhiDanh?.length; i++) {
      let item = userDetail.chiTietKhoaHocGhiDanh[i];
      dispatch(fetchCourseDetail(item.maKhoaHoc));
      setState({
        data: listCourseDetail,
        totalPage: listCourseDetail.length / pageSize,
        minIndex: 0,
        current: 1,
        maxIndex: pageSize,
      });
    }
    // userDetail.chiTietKhoaHocGhiDanh?.forEach((item, index) => {
    //   dispatch(fetchCourseDetail(item.maKhoaHoc));
    //   setState({
    //     data: listCourseDetail,
    //     totalPage: listCourseDetail.length / pageSize,
    //     minIndex: 0,
    //     current: 1,
    //     maxIndex: pageSize,
    //   });
    // });
  }, []);
  let renderContent = () => {
    if (listCourseDetail.length === 0) {
      return (
        <p className=" italic text-center text-xl  text-red-500">
          (Không tìm thấy khóa học nào)
        </p>
      );
    } else {
      return listCourseDetail.map((item, index) => {
        return (
          index >= state.minIndex &&
          index < state.maxIndex && (
            <CourseItem key={index} data={item} index={index} />
          )
        );
      });
    }
  };

  let handleChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  return (
    <div className=" flex flex-col md:space-y-3 xl:space-y-6 xl:h-fit  lg:h-screen lg:space-y-3   relative">
      <h1 className=" lg:text-xl text-center uppercase font-bold ">
        các khóa học đã tham gia
      </h1>
      <div className=" self-end flex ">
        <Form
          id="form-search-course"
          onFinish={onFinish}
          autoComplete="off"
          className=" flex"
        >
          <Form.Item name="valueSearch">
            <Input placeholder="Nhập tên khoá học" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">
              <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
        <Button
          onClick={() => {
            dispatch(searchUser(""));
            document.getElementById("form-search-course").reset();
          }}
        >
          Reset
        </Button>
      </div>
      <div className="space-y-3 flex flex-col items-center justify-start ">
        <div className=" min-h-[460px]">{renderContent()}</div>
        <Pagination
          className=" mx-auto  min-h-[200px]"
          pageSize={pageSize}
          current={state.current}
          total={listCourseDetail.length}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
