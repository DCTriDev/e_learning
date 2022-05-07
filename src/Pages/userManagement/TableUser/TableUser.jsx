import React from "react";

import { message, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Form, Input, Button } from "antd";
import {
  deleteUser,
  fetchUserList,
  searchUser,
} from "../../../Redux/Slice/adminSlice";
import AdminSrv from "../../../Services/admin.service";
import RegisterPopup from "./RegisterPopup";
import {
  SearchOutlined,
  UndoOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export default function TableUser() {
  const dispatch = useDispatch();
  const pageSize = 10;
  let [state, setState] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  let handleChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  useEffect(() => {
    dispatch(fetchUserList());
    setState({
      data: listUser,
      totalPage: listUser.length / pageSize,
      minIndex: 0,
      current: 1,
      maxIndex: pageSize,
    });
  }, []);
  const handleDeleteUser = (taiKhoan) => {
    AdminSrv.deleteUser(taiKhoan)
      .then((res) => {
        console.log(res);
        message.success(`Bạn đã xóa tài khoản ${taiKhoan}`);
        dispatch(deleteUser(taiKhoan));
      })
      .catch((err) => {
        message.error(err.err.response.data);
      });
  };
  const { listUser } = useSelector((state) => state.adminSlice);

  const onFinish = (values) => {
    console.log("Success:", values.valueSearch);
    dispatch(searchUser(values.valueSearch));
    setState({
      data: listUser,
      totalPage: listUser.length / pageSize,
      minIndex: 0,
      current: 1,
      maxIndex: pageSize,
    });
  };
  const renderTable = () => {
    if (listUser?.length === 0) {
      return (
        <tr>
          <td
            colSpan="7"
            className=" italic text-red-500 text-xl  text-center "
            // style={{ colspan: 3 }}
          >
            Không có kết quả
          </td>
        </tr>
      );
    } else {
      return listUser?.map((item, index) => {
        return (
          index >= state.minIndex &&
          index < state.maxIndex && (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-slate-300" : ""} h-12 `}
            >
              <td className="text-center hidden  leading-[54px] lg:block">
                {index + 1}
              </td>
              <td className="text-center">{item.taiKhoan}</td>
              <td className="text-center">{item.email}</td>
              <td className="text-center">{item.hoTen}</td>
              <td className="text-center hidden  leading-[54px] lg:block">
                {item.soDt}
              </td>
              <td className="text-center">
                {item.maLoaiNguoiDung === "GV" ? (
                  <span className=" bg-red-300 p-2 rounded-lg">
                    {item.maLoaiNguoiDung}
                  </span>
                ) : (
                  <span className=" bg-green-300 p-2 rounded-lg">
                    {item.maLoaiNguoiDung}
                  </span>
                )}
              </td>
              <td className="text-center space-y-3 lg:space-y-0 lg:space-x-2  flex flex-col items-center lg:flex-row lg:justify-center lg:items-center">
                <RegisterPopup data={item} />
                <NavLink
                  className=" cursor-pointer  text-white lg:px-4 lg:py-2 rounded-lg border-none shadow-lg   bg-yellow-500 w-16 lg:w-auto"
                  to={{
                    pathname: "/UserManagement/chinhSuaThongTinNguoiDung",
                    state: {
                      data: item,
                    },
                  }}
                >
                  Sửa
                </NavLink>
                <button
                  onClick={() => {
                    handleDeleteUser(item.taiKhoan);
                  }}
                  className=" cursor-pointer  text-white lg:px-4 lg:py-2 rounded-lg border-none shadow-lg   bg-red-500 w-16 lg:w-auto m-0"
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
  return (
    <div className="w-full">
      <div>
        <div className="flex">
          <Form
            id="form-search"
            onFinish={onFinish}
            autoComplete="off"
            className="lg:max-w-max-w-1/3 flex"
          >
            <Form.Item name="valueSearch">
              <Input placeholder="Nhập tên/tài khoản" />
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
              document.getElementById("form-search").reset();
            }}
          >
            <UndoOutlined />
          </Button>
          <NavLink to="/UserManagement/themNguoiDung">
            <Button>
              <UserAddOutlined />
            </Button>
          </NavLink>
        </div>
      </div>
      <table className=" w-full">
        <thead>
          <tr className=" w-full  bg-yellow-400 h-14 shadow-lg">
            <th className="text-center hidden  leading-[54px] lg:block  lg:w-[5%]">
              STT
            </th>
            <th className="text-center">Tài Khoản</th>
            <th className="text-center">Email</th>
            <th className="text-center">Họ tên</th>
            <th className="text-center hidden  leading-[54px] lg:block">
              Số Điện thoại{" "}
            </th>
            <th className="text-center"> Loại người dùng</th>
            <th className="text-center lg:w-1/6"> Thao tác</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Pagination
        className=" w-fit mx-auto mt-3"
        showSizeChanger={false}
        pageSize={pageSize}
        defaultCurrent={state.current}
        current={state.current}
        total={listUser.length}
        onChange={handleChange}
      />
    </div>
  );
}
