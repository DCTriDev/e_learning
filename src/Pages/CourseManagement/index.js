import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseList,
  fetchDeleteCourse,
  searchCourse,
} from "../../Redux/Slice/courseSlice";
// import CourseManagementSrv from "../../Services/courseMangement.service";

export default function CourseManagement() {
  let dispatch = useDispatch();
  let [stateTable, setStateTable] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  useEffect(() => {
    dispatch(fetchCourseList());

    setStateTable({
      data: courseList,
      totalPage: courseList.length / 10,
      current: 1,
      minIndex: 0,
      maxIndex: 10,
    });
  }, []);
  let { courseList } = useSelector((state) => state.courseSlice);
  let handleChange = (page) => {
    setStateTable({
      current: page,
      minIndex: (page - 1) * 10,
      maxIndex: page * 10,
    });
  };
  const renderTableList = () => {
    if (courseList.length === 0) {
      return (
        <tr>
          <td colSpan="7" className=" italic text-red-500 ">
            Không tìm thấy khóa học nào
          </td>
        </tr>
      );
    } else {
      console.log("courseList", courseList);
      return courseList?.map((item, i) => {
        return (
          i >= stateTable.minIndex &&
          i < stateTable.maxIndex && (
            <tr
              key={i}
              className={`${
                i % 2 === 0 ? "bg-gray-200" : "bg-white"
              } text-center`}
            >
              <td>{++i}</td>
              <td>{item.maKhoaHoc}</td>
              <td>{item.tenKhoaHoc}</td>
              <td>
                <img src="https://picsum.photos/100/100" alt="" />
              </td>
              <td>{item.luotXem}</td>
              <td>{item.nguoiTao.hoTen}</td>
              <td className=" text-white">
                <button className="bg-green-400 border-none ">Ghi danh</button>
                <button className="bg-yellow-400 border-none ">Sửa</button>
                <button
                  className="bg-red-400 border-none "
                  onClick={() => {
                    dispatch(fetchDeleteCourse(item.maKhoaHoc));
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          )
        );
      });
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values.valueSearchCourse);
    dispatch(searchCourse(values.valueSearchCourse));
    setStateTable({
      data: courseList,
      totalPage: courseList.length / 10,
      minIndex: 0,
      current: 1,
      maxIndex: 10,
    });
  };
  return (
    <div>
      <div className=" relative">
        <div className=" flex ">
          <Form
            id="form-search-course"
            onFinish={onFinish}
            autoComplete="off"
            className=" lg:max-w-max-w-1/3 flex"
          >
            <Form.Item name="valueSearchCourse">
              <Input placeholder="Nhập tên/mã khóa học" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
          <Button
            onClick={() => {
              dispatch(searchCourse(""));
              document.getElementById("form-search-course").reset();
            }}
          >
            <UndoOutlined />
          </Button>
        </div>
        <table className="w-full">
          <thead className=" bg-yellow-400 h-14 shadow-lg">
            <tr className="text-center">
              <th>STT</th>
              <th>Mã khóa học</th>
              <th>Tên khóa học</th>
              <th>Hình ảnh </th>
              <th>Lượt xem</th>
              <th>Người tạo</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{renderTableList()}</tbody>
        </table>
        <Pagination
          className=" w-fit top-0 absolute left-1/2 -translate-x-1/2 mt-[1200px] "
          showSizeChanger={false}
          pageSize={10}
          defaultCurrent={stateTable.current}
          current={stateTable.current}
          total={courseList.length}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
