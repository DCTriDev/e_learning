import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { Button, Form, Input, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseList,
  fetchDeleteCourse,
  searchCourse,
} from "../../Redux/Slice/courseSlice";
import PopupRegister from "./PopupRegister";

export default function CourseManagement(props) {
  const dispatch = useDispatch();
  const [stateTable, setStateTable] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  const handleClickEdit = props.handleClickEdit

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
  const { courseList } = useSelector((state) => state.courseSlice);
  const handleChange = (page) => {
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
            <td colSpan="7" className=" italic text-red-500  text-center">
              Không tìm thấy khóa học nào
            </td>
          </tr>
      );
    } else {
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
                  <td className="text-center hidden lg:table-cell">{++i}</td>
                  <td className="text-center hidden md:table-cell ">
                    {item.maKhoaHoc}
                  </td>
                  <td className="text-center">{item.tenKhoaHoc}</td>
                  <td className="text-center">
                    <img src={item.hinhAnh} alt="" className='w-20 h-auto' />
                  </td>
                  <td className="text-center hidden lg:table-cell">
                    {item.luotXem}
                  </td>
                  <td className="text-center">{item.nguoiTao.hoTen}</td>
                  <td className="text-center space-y-3 lg:space-y-0 lg:space-x-2  flex flex-col items-center lg:flex-row justify-center lg:h-[120px] ">
                    <button className=" cursor-pointer  text-white lg:px-4 lg:py-2 rounded-lg border-none shadow-lg   bg-yellow-500 w-16 lg:w-auto"
                    onClick={() => {
                      handleClickEdit(item)
                    }}>
                      Sửa
                    </button>
                    <PopupRegister data={item} />
                    <button
                        className=" cursor-pointer  text-white lg:px-4 lg:py-2 rounded-lg border-none shadow-lg   bg-red-500 w-16 lg:w-auto"
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
        <h1 className='text-center text-3xl mb-6'>Quản lý khóa học</h1>
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
                <th className=" md:w-[5%] hidden lg:table-cell">STT</th>
                <th className=" md:w-[20%] hidden md:table-cell ">Mã khóa học</th>
                <th className=" md:w-[20%]">Tên khóa học</th>
                <th>Hình ảnh </th>
                <th className=" md:w-[5%]  hidden lg:table-cell">Lượt xem</th>
                <th className=" md:w-[20%]">Người tạo</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody className=" h-[1200px]">{renderTableList()}</tbody>
          </table>
          <Pagination
              className=" w-fit mx-auto mt-3 "
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
