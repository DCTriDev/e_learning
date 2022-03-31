import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import httpService from "../../../Services/http.service";
import {
  setUserDetail,
  updateUserDetail,
} from "../../../Redux/Slice/userSlice";
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
    if (
      values.matKhau === userDetail.matKhau &&
      values.email === userDetail.email &&
      values.hoTen === userDetail.hoTen &&
      values.soDT === userDetail.soDT
    ) {
      error("chưa có thông tin nào  cập nhật");
    } else {
      httpService
        .updateUserDetail({ ...values, maLoaiNguoiDung: "HV", maNhom: "GP01" })
        .then((res) => {
          success("Cập nhật thành công");

          dispatch(
            updateUserDetail({
              ...values,
              maLoaiNguoiDung: "HV",
              maNhom: "GP01",
            })
          );
        })

        .catch((erros) => {
          console.log({ erros });
          console.log(erros.err.response.data);
          error(`${erros.err.response.data}`);
        });
    }
  };
  const success = () => {
    message.success("cập nhật thành công");
  };
  const error = (data) => {
    message.error(data);
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
