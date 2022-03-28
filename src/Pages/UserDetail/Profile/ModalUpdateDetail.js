import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import httpService from "../../../Services/http.service";
import { setUserDetail } from "../../../Redux/Slice/userSlice";
// import isEmail from "validator/lib/isEmail";
import validator from "validator";
export default function ModalUpdateDetail() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
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
    httpService
      .updateUserDetail({ ...userDetail, ...values })
      .then((res) => {
        dispatch(setUserDetail(res.data));
        success("Cập nhật thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const success = () => {
    message.success("cập nhật thành công");
  };
  const error = () => {
    message.error("Cập nhật thất bại");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    error(errorInfo);
  };
  const { userDetail } = useSelector((state) => state.userSlice);

  return (
    <div>
      <Button type="primary" onClick={showModal}>
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
          // resetFields=
          initialValues={userDetail}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Tài khoản" name="taiKhoan">
            <Input disabled />
          </Form.Item>

          <Form.Item
            // validateTrigger="onBlur"
            label="Mật khẩu"
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
            <Input />
          </Form.Item>
          <Form.Item
            // validateTrigger="onBlur"
            label="Email"
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
            <Input />
          </Form.Item>
          <Form.Item
            // validateTrigger="onBlur"
            label="Họ tên"
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            // validateTrigger="onBlur"
            label="Số điện thoại"
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
                    : Promise.reject(new Error("Số Diện thoại không hợp lệ")),
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            // validateTrigger="onBlur"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
