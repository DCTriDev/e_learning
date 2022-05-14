import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateUser } from "../../../Redux/Slice/userSlice";
import validator from "validator";
export default function ModalUpdateDetail() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const dispatch = useDispatch();
  const onFinish = (values) => {
    if (
      values.matKhau === userDetail.matKhau &&
      values.email === userDetail.email &&
      values.hoTen === userDetail.hoTen &&
      values.soDT === userDetail.soDT
    ) {
      error("chưa có thông tin nào cập nhật");
    } else {
      dispatch(fetchUpdateUser({ ...userDetail, ...values }));
      message.success("Cập nhật thành công");
    }
  };

  const error = (data) => {
    message.error(data);
  };
  const onFinishFailed = (errorInfo) => {
    error(errorInfo);
  };
  const { userDetail } = useSelector((state) => state.userSlice);

  return (
    <div className=" w-fit lg:mx-auto ">
      <Button
        className=" bg-yellow-400 border-yellow-400 h-14 rounded-lg  lg:text-xl hover:shadow-xl  hover:-translate-y-3"
        type="primary"
        onClick={showModal}
      >
        Chỉnh sửa
      </Button>
      <Modal
        title="Chỉnh sửa thông tin cá nhân"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          className=" lg:space-y-14"
          form={form}
          initialValues={userDetail}
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className=" flex items-center"
            label={<span className=" text-lg">Mật khẩu</span>}
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
              {
                min: 8,
                message: "Tối thiểu 8 kí tự",
              },
            ]}
            hasFeedback
          >
            <Input.Password className=" lg:h-14 rounded-xl hover:border-yellow-500" />
          </Form.Item>
          <Form.Item
            className=" flex items-center"
            label={<span className=" text-lg">Email</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
              {
                validator: (_, value) =>
                  validator.isEmail(value)
                    ? Promise.resolve()
                    : Promise.reject(new Error(" email không hợp lệ")),
              },
            ]}
            hasFeedback
          >
            <Input className=" lg:h-14 rounded-xl hover:border-yellow-500" />
          </Form.Item>
          <Form.Item
            className=" flex items-center"
            label={<span className=" text-lg">Họ tên</span>}
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
            hasFeedback
          >
            <Input className=" lg:h-14 rounded-xl hover:border-yellow-500" />
          </Form.Item>
          <Form.Item
            className=" flex items-center"
            label={<span className=" text-lg">Số điện thoại</span>}
            name="soDT"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
              {
                validator: (_, value) =>
                  validator.isMobilePhone(value)
                    ? Promise.resolve()
                    : Promise.reject(new Error("Số điện thoại không hợp lệ")),
              },
            ]}
            hasFeedback
          >
            <Input className=" lg:h-14 rounded-xl hover:border-yellow-500" />
          </Form.Item>
          <Form.Item
            className=" flex items-center"
            wrapperCol={{
              offset: 10,
              span: 24,
            }}
          >
            <Button
              type="primary"
              className=" bg-white text-yellow-400 h-10 w-20  border-yellow-600 hover:shadow-xl  hover:-translate-y-3 mx-auto"
              htmlType="submit"
            >
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
