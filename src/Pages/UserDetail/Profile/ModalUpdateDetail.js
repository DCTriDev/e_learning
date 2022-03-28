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
      .updateUserDetail({ ...values, maLoaiNguoiDung: "HV", maNhom: "GP01" })
      .then((res) => {
        // console.log({ res });
        // dispatch(setUserDetail(res.data));
        // httpService
        //   .getUserDetail({ taikhoan: res.taikhoan, matKhau: res.matKhau })
        //   .then((res) => {
        //     dispatch(setUserDetail(res.data));
        //   })
        //   .catch((err) => console.log(err));
        // console.log({ userDetail });
        success("Cập nhật thành công");
        console.log(res.data);
        let data = res.data;
        return data;
      })
      .then((data) => {
        httpService
          .getUserDetail({ taikhoan: data.taiKhoan, matKhau: data.matKhau })
          .then((res) => {
            dispatch(setUserDetail(res.data));
          })
          .catch((err) => console.log(err));
      })
      .catch((erros) => {
        console.log({ erros });
        console.log(erros.err.response.data);
        error(`${erros.err.response.data}`);
      });
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
  // console.log({ userDetail });

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
