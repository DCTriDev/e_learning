import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Pagination, Select } from "antd";
import React, { useState } from "react";

import CourseManagementSrv from "../../../Services/courseMangement.service";
const { Option } = Select;
export default function PopupRegister(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [UsersWaitingApproval, setUsersWaitingApproval] = useState([]);
  let [UsersRegisted, setUsersRegisted] = useState([]);
  let [UsersRegistedClone, setUsersRegistedClone] = useState([]);
  let [UnregisteredUssers, setUnregisteredUssers] = useState([]);
  let [stateTable2, setStateTable2] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  let [stateTable1, setStateTable1] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const onFinish = (values) => {
    CourseManagementSrv.registerUser(props.data.maKhoaHoc, values.taiKhoan)
      .then((res) => {
        message.success(res.data);
        let newUserRegisted = [...UnregisteredUssers].find(
          (item) => item.taiKhoan === values.taiKhoan
        );
        let newUnregisteredUssers = [...UnregisteredUssers].filter(
          (item) => item.taiKhoan !== values.taiKhoan
        );
        setUnregisteredUssers(newUnregisteredUssers);
        setUsersRegisted([...UsersRegisted, newUserRegisted]);
        document.getElementById("form-register-user").reset();
        setUsersRegistedClone([...UsersRegistedClone, newUserRegisted]);
      })
      .catch((err) => message.error(err.err.response.data));
  };
  const onFinish2 = (values) => {
    searchUserRegisted(values.valueSearchCourse);
  };

  let handleChange1 = (page) => {
    setStateTable1({
      current: page,
      minIndex: (page - 1) * 5,
      maxIndex: page * 5,
    });
  };
  let handleChange2 = (page) => {
    setStateTable2({
      current: page,
      minIndex: (page - 1) * 5,
      maxIndex: page * 5,
    });
  };
  const onFinishFailed = (errorInfo) => {
  };
  const showModal = () => {
    CourseManagementSrv.getUsersWaitingApproval(props.data.maKhoaHoc)
      .then((res) => {
        setUsersWaitingApproval(res.data);
      })
    CourseManagementSrv.getUsersRegisted(props.data.maKhoaHoc)
      .then((res) => {
        setUsersRegisted(res.data);
        setUsersRegistedClone(res.data);
      })
    CourseManagementSrv.getUnregisteredUssers(props.data.maKhoaHoc)
      .then((res) => {
        setUnregisteredUssers(res.data);
      })
    setStateTable1({
      data: UsersWaitingApproval,
      totalPage: UsersWaitingApproval.length / 5,
      minIndex: 0,
      current: 1,
      maxIndex: 5,
    });
    setStateTable2({
      data: UsersRegisted,
      totalPage: UsersRegisted.length / 5,
      minIndex: 0,
      current: 1,
      maxIndex: 5,
    });
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const searchUserRegisted = (text) => {
    let newUsersRegisted = [...UsersRegistedClone].filter((item) => {
      return (
        item.taiKhoan
          ?.toLowerCase()
          .trim()
          .search(text?.toLowerCase().trim()) !== -1 ||
        item.hoTen?.toLowerCase().trim().search(text?.toLowerCase().trim()) !==
          -1
      );
    });
    setUsersRegisted(newUsersRegisted);
    setStateTable2({
      data: UsersRegisted,
      totalPage: UsersRegisted.length / 5,
      minIndex: 0,
      current: 1,
      maxIndex: 5,
    });
  };
  const handleCancleUserWaitingApproval = (maKhoaHoc, taiKhoan) => {
    CourseManagementSrv.cancleUsersWaitingApproval(maKhoaHoc, taiKhoan)
      .then((res) => {
        message.success(res.data);

        let newUnregisteredUsser = [...UsersWaitingApproval].find(
          (item) => item.taiKhoan === taiKhoan
        );
        setUnregisteredUssers([...UnregisteredUssers, newUnregisteredUsser]);
        setUsersWaitingApproval(
          [...UsersWaitingApproval].filter((user) => user.taiKhoan !== taiKhoan)
        );
      })
      .catch((err) => {
        message.error(err.err.response.data);
      });
  };
  const handleCancleUserRegisted = (maKhoaHoc, taiKhoan) => {
    CourseManagementSrv.cancleUsersWaitingApproval(maKhoaHoc, taiKhoan)
      .then((res) => {
        let newUnregisteredUssers = [...UsersRegisted].find(
          (item) => item.taiKhoan === taiKhoan
        );
        setUnregisteredUssers([...UnregisteredUssers, newUnregisteredUssers]);
        setUsersRegisted(
          [...UsersRegisted].filter((user) => user.taiKhoan !== taiKhoan)
        );
        message.success(res.data);
        setUsersRegistedClone(
          [...UsersRegisted].filter((user) => user.taiKhoan !== taiKhoan)
        );
        setStateTable2({
          data: UsersRegisted,
          totalPage: UsersRegisted.length / 5,
          minIndex: 0,
          current: 1,
          maxIndex: 5,
        });
      })
      .catch((err) => {
        message.error(err.err.response.data);
      });
  };
  const renderTableUsersWaitingApproval = () => {
    return UsersWaitingApproval?.map((item, i) => {
      return (
        i >= stateTable1.minIndex &&
        i < stateTable1.maxIndex && (
          <tr key={i} className="text-center">
            <td className=" border-r-2 border-solid border-black w-1/4">
              {++i}
            </td>
            <td className=" border-r-2 border-solid border-black w-1/4">
              {item.taiKhoan}
            </td>
            <td className=" border-r-2 border-solid border-black w-1/4">
              {item.hoTen}
            </td>
            <td className=" border-r-2 border-solid border-black w-1/4">
              <button
                onClick={() => {
                  CourseManagementSrv.registerUser(
                    props.data.maKhoaHoc,
                    item.taiKhoan
                  )
                    .then((res) => {
                      message.success(res.data);
                      let newUserRegisted = [...UsersWaitingApproval].find(
                        (user) => user.taiKhoan === item.taiKhoan
                      );
                      let newUsersWaitingApproval = [
                        ...UsersWaitingApproval,
                      ].filter((user) => user.taiKhoan !== item.taiKhoan);
                      setUsersWaitingApproval(newUsersWaitingApproval);
                      setUsersRegisted([...UsersRegisted, newUserRegisted]);
                      setUsersRegistedClone([
                        ...UsersRegistedClone,
                        newUserRegisted,
                      ]);
                    })
                    .catch((err) => message.error(err.err.response.data));
                }}
              >
                Xác nhận
              </button>
              <button
                onClick={() => {
                  handleCancleUserWaitingApproval(
                    props.data.maKhoaHoc,
                    item.taiKhoan
                  );
                  setUsersWaitingApproval(
                    [...UsersWaitingApproval].filter(
                      (user) => user.taiKhoan !== item.taiKhoan
                    )
                  );
                  setUnregisteredUssers([...UnregisteredUssers, item]);
                }}
              >
                Hủy
              </button>
            </td>
          </tr>
        )
      );
    });
  };
  const renderTableUsersRegisted = () => {
    return UsersRegisted?.map((item, i) => {
      return (
        i >= stateTable2.minIndex &&
        i < stateTable2.maxIndex && (
          <tr key={i} className="text-center">
            <td className=" border-r-2 border-solid border-black w-1/4">
              {++i}
            </td>
            <td className=" border-r-2 border-solid border-black w-1/4">
              {item.taiKhoan}
            </td>
            <td className=" border-r-2 border-solid border-black w-1/4">
              {item.hoTen}
            </td>
            <td className=" border-r-2 border-solid border-black w-1/4">
              <button
                onClick={() => {
                  handleCancleUserRegisted(props.data.maKhoaHoc, item.taiKhoan);
                }}
              >
                Hủy
              </button>
            </td>
          </tr>
        )
      );
    });
  };
  return (
    <div>
      <button
        onClick={showModal}
        className=" cursor-pointer  text-white lg:px-4 lg:py-2 rounded-lg border-none shadow-lg   bg-green-500 w-16 lg:w-auto"
      >
        Ghi danh
      </button>
      <Modal
        className=" w-screen bg-none"
        title="Ghi Danh"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="h-fit pb-12">
          <Form
            id="form-register-user"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className=" flex"
          >
            <Form.Item name="taiKhoan">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Nhập tên người dùng"
                optionFilterProp="item"
                filterOption={(input, option) =>
                  option.children
                    ?.toLowerCase()
                    .indexOf(input?.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                  optionA?.children
                    ?.toLowerCase()
                    .localeCompare(optionB.item?.toLowerCase())
                }
              >
                {UnregisteredUssers.map((item, i) => {
                  return (
                    <Option key={i} value={item.taiKhoan}>
                      {item.hoTen}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <button type="submit" className="h-[32px]">
              Ghi Danh
            </button>
          </Form>
          <div className=" h-auto relative mb-12">
            <p>Học viên chờ xác nhận</p>
            {UsersWaitingApproval.length === 0 ? (
              <p className=" italic text-red-500">Không có học viên</p>
            ) : (
              <div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        STT
                      </th>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        Tài khoản
                      </th>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        Họ tên
                      </th>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        Chờ xác nhận
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderTableUsersWaitingApproval()}</tbody>
                </table>
                <Pagination
                  className=" w-fit absolute bottom-0 left-1/2 translate-y-[100%] -translate-x-1/2"
                  showSizeChanger={false}
                  pageSize={5}
                  defaultCurrent={stateTable1.current}
                  current={stateTable1.current}
                  total={UsersWaitingApproval.length}
                  onChange={handleChange1}
                />
              </div>
            )}
          </div>
          <div>
            <p>Học viên đã tham gia khóa học</p>
            <div className="flex">
              <Form
                id="form-search-user"
                onFinish={onFinish2}
                autoComplete="off"
                className=" lg:max-w-max-w-1/3 flex"
              >
                <Form.Item name="valueSearchCourse">
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
                  searchUserRegisted("");
                  document.getElementById("form-search-user").reset();
                }}
              >
                <UndoOutlined />
              </Button>
            </div>
            {UsersRegisted.length === 0 ? (
              <p className=" italic text-red-500">không có học viên </p>
            ) : (
              <div className=" relative">
                <table className="w-full ">
                  <thead>
                    <tr>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        STT
                      </th>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        Tài khoản
                      </th>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        Họ tên
                      </th>
                      <th className=" border-r-2 border-solid border-black w-1/4">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderTableUsersRegisted()}</tbody>
                </table>
                <Pagination
                  className=" w-fit absolute  bottom-0  translate-y-[100%] left-1/2 -translate-x-1/2 "
                  showSizeChanger={false}
                  pageSize={5}
                  defaultCurrent={stateTable2.current}
                  current={stateTable2.current}
                  total={UsersRegisted.length}
                  onChange={handleChange2}
                />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
