import { Select, message, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import validator from "validator";

import AdminSrv from "../../../Services/admin.service";

export const ModalUser = (props) => {
  const type = props.path === "/UserManagement/themNguoiDung";
  let location = useLocation();
  const history = useHistory();
  const dataUser = type
    ? ""
    : { ...location.state.data, soDT: location.state.data.soDt };
  const styleInput = "";
  const onFinish = (values) => {
    type
      ? AdminSrv.addUser({ ...values, maNhom: "GP01" })
          .then((res) => {
            console.log(res);
            message.success("Thêm người dùng thành công");
          })
          .catch((err) => {
            console.log(err.err.response.data);
            message.error(err.err.response.data);
          })
      : AdminSrv.updateUser({ ...values, maNhom: "GP01" })
          .then((res) => {
            message.success("Cập nhật thông tin thành công");
          })
          .catch((err) => {
            message.error(err.err.response.data);
          });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" p-5 h-screen bg-yellow-400">
      <h1>{type ? "Thêm người dùng" : "Chỉnh sửa thông tin người dùng"}</h1>
      <Form
        initialValues={type ? null : dataUser}
        values={dataUser}
        className=" w-full grid grid-cols-1  lg:grid-cols-2 gap-x-14 "
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            type ? { min: 10, message: "ít nhất 8 kí tự " } : "",
          ]}
          hasFeedback
        >
          <Input disabled={type ? false : true} className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            {
              validator: (_, value) =>
                validator.isEmail(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error(" email không hợp lệ")),
            },
          ]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[{ required: true, message: "Không được bỏ trống" }]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          className=" "
          label="Mật khẩu "
          name="matKhau"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            {
              validator: (_, value) =>
                validator.isStrongPassword(value, {
                  minLength: 8,
                  minLowercase: 1,
                  minUppercase: 1,
                  minNumbers: 1,
                  minSymbols: 1,
                  returnScore: false,
                })
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Mật khẩu ít nhất 8 kí tự bao gồm : kí tự in hoa , thường , số , kí tự đặc biệt"
                      )
                    ),
            },
          ]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          className=" "
          label="Số điện thoại"
          name="soDT"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            {
              validator: (_, value) =>
                validator.isMobilePhone(value, "vi-VN")
                  ? Promise.resolve()
                  : Promise.reject(new Error("Số điện thoại không hợp lệ")),
            },
          ]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          label="Loại người dùng"
          name="maLoaiNguoiDung"
          rules={[{ required: true, message: "Không được bỏ trống" }]}
          hasFeedback
        >
          <Select
            className=" border-none"
            hasFeedback
            rules={[{ required: true, message: "Không được bỏ trống" }]}
          >
            <Select.Option value="HV">Học viên</Select.Option>
            <Select.Option value="GV">Giáo viên</Select.Option>
          </Select>
        </Form.Item>
        <div>
          {type ? (
            <button type="submit">Thêm</button>
          ) : (
            <button type="submit">Lưu</button>
          )}
        </div>
      </Form>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Quay lại
      </button>
    </div>
  );
};